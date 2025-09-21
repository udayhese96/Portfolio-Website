import { supabase } from './supabaseClient';
import { emailService } from './emailService';
import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcryptjs';

export interface AuthUser {
  id: string;
  email: string;
  full_name?: string;
  role: string;
  last_login?: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface ResetPasswordData {
  token: string;
  newPassword: string;
}

class AuthService {
  async login(credentials: LoginCredentials): Promise<{ user: AuthUser | null; error: string | null }> {
    try {
      // Get user from admin_users table
      const { data: adminUser, error: fetchError } = await supabase
        .from('admin_users')
        .select('*')
        .eq('email', credentials.email)
        .eq('is_active', true)
        .single();

      if (fetchError || !adminUser) {
        return { user: null, error: 'Invalid email or password' };
      }

      // Verify password
      const isPasswordValid = await bcrypt.compare(credentials.password, adminUser.password_hash);

      if (!isPasswordValid) {
        return { user: null, error: 'Invalid email or password' };
      }

      // Update last login
      await supabase
        .from('admin_users')
        .update({ last_login: new Date().toISOString() })
        .eq('id', adminUser.id);

      // Create session token
      const sessionToken = uuidv4();

      const user: AuthUser = {
        id: adminUser.id,
        email: adminUser.email,
        full_name: adminUser.full_name,
        role: adminUser.role,
        last_login: adminUser.last_login,
      };

      // Store session in localStorage (in production, use httpOnly cookies)
      localStorage.setItem('auth_token', sessionToken);
      localStorage.setItem('auth_user', JSON.stringify(user));

      return { user, error: null };
    } catch (error: any) {
      return { user: null, error: error.message };
    }
  }

  async logout(): Promise<{ error: string | null }> {
    try {
      localStorage.removeItem('auth_token');
      localStorage.removeItem('auth_user');
      return { error: null };
    } catch (error: any) {
      return { error: error.message };
    }
  }

  async getCurrentUser(): Promise<AuthUser | null> {
    try {
      const authUser = localStorage.getItem('auth_user');
      if (!authUser) return null;

      const user = JSON.parse(authUser) as AuthUser;

      // Verify user still exists and is active
      const { data: adminUser } = await supabase
        .from('admin_users')
        .select('*')
        .eq('id', user.id)
        .eq('is_active', true)
        .single();

      if (!adminUser) {
        localStorage.removeItem('auth_token');
        localStorage.removeItem('auth_user');
        return null;
      }

      return user;
    } catch (error) {
      return null;
    }
  }

  async forgotPassword(email: string): Promise<{ success: boolean; error: string | null }> {
    try {
      // Check if user exists
      const { data: user } = await supabase
        .from('admin_users')
        .select('id, email, full_name')
        .eq('email', email)
        .single();

      if (!user) {
        return { success: false, error: 'No account found with this email address' };
      }

      // Generate reset token
      const resetToken = uuidv4();
      const expiresAt = new Date();
      expiresAt.setHours(expiresAt.getHours() + 1); // 1 hour expiry

      // Store reset token in database
      const { error: tokenError } = await supabase
        .from('password_reset_tokens')
        .insert({
          user_id: user.id,
          token: resetToken,
          expires_at: expiresAt.toISOString(),
        });

      if (tokenError) {
        return { success: false, error: 'Failed to generate reset token' };
      }

      // Send reset email
      const emailSent = await emailService.sendPasswordResetEmail({
        email: user.email,
        resetToken,
        userName: user.full_name,
      });

      if (!emailSent) {
        return { success: false, error: 'Failed to send reset email' };
      }

      return { success: true, error: null };
    } catch (error: any) {
      return { success: false, error: error.message };
    }
  }

  async validateResetToken(token: string): Promise<{ valid: boolean; userId?: string; error?: string }> {
    try {
      const { data: tokenData } = await supabase
        .from('password_reset_tokens')
        .select('*')
        .eq('token', token)
        .is('used_at', null)
        .single();

      if (!tokenData) {
        return { valid: false, error: 'Invalid or expired reset token' };
      }

      // Check if token is expired
      const now = new Date();
      const expiresAt = new Date(tokenData.expires_at);

      if (now > expiresAt) {
        return { valid: false, error: 'Reset token has expired' };
      }

      return { valid: true, userId: tokenData.user_id };
    } catch (error: any) {
      return { valid: false, error: error.message };
    }
  }

  async resetPassword(data: ResetPasswordData): Promise<{ success: boolean; error: string | null }> {
    try {
      // Validate token
      const tokenValidation = await this.validateResetToken(data.token);

      if (!tokenValidation.valid) {
        return { success: false, error: tokenValidation.error || 'Invalid token' };
      }

      // Get user by token
      const { data: tokenData } = await supabase
        .from('password_reset_tokens')
        .select('user_id')
        .eq('token', data.token)
        .single();

      if (!tokenData) {
        return { success: false, error: 'Invalid reset token' };
      }

      // Hash new password
      const saltRounds = 12;
      const hashedPassword = await bcrypt.hash(data.newPassword, saltRounds);

      // Update password in admin_users table
      const { error: updateError } = await supabase
        .from('admin_users')
        .update({
          password_hash: hashedPassword,
          updated_at: new Date().toISOString()
        })
        .eq('id', tokenData.user_id);

      if (updateError) {
        return { success: false, error: 'Failed to update password' };
      }

      // Mark token as used
      await supabase
        .from('password_reset_tokens')
        .update({ used_at: new Date().toISOString() })
        .eq('token', data.token);

      return { success: true, error: null };
    } catch (error: any) {
      return { success: false, error: error.message };
    }
  }

  async changePassword(currentPassword: string, newPassword: string): Promise<{ success: boolean; error: string | null }> {
    try {
      const currentUser = await this.getCurrentUser();
      if (!currentUser) {
        return { success: false, error: 'User not authenticated' };
      }

      // Get current user data
      const { data: adminUser } = await supabase
        .from('admin_users')
        .select('password_hash')
        .eq('id', currentUser.id)
        .single();

      if (!adminUser) {
        return { success: false, error: 'User not found' };
      }

      // Verify current password
      const isCurrentPasswordValid = await bcrypt.compare(currentPassword, adminUser.password_hash);
      if (!isCurrentPasswordValid) {
        return { success: false, error: 'Current password is incorrect' };
      }

      // Hash new password
      const saltRounds = 12;
      const hashedPassword = await bcrypt.hash(newPassword, saltRounds);

      // Update password
      const { error: updateError } = await supabase
        .from('admin_users')
        .update({
          password_hash: hashedPassword,
          updated_at: new Date().toISOString()
        })
        .eq('id', currentUser.id);

      if (updateError) {
        return { success: false, error: 'Failed to update password' };
      }

      return { success: true, error: null };
    } catch (error: any) {
      return { success: false, error: error.message };
    }
  }

  async createAdminUser(email: string, password: string, fullName: string): Promise<{ success: boolean; error: string | null }> {
    try {
      // Check if user already exists
      const { data: existingUser } = await supabase
        .from('admin_users')
        .select('email')
        .eq('email', email)
        .single();

      if (existingUser) {
        return { success: false, error: 'User already exists' };
      }

      // Hash password
      const saltRounds = 12;
      const hashedPassword = await bcrypt.hash(password, saltRounds);

      // Create user
      const { error: insertError } = await supabase
        .from('admin_users')
        .insert({
          email,
          password_hash: hashedPassword,
          full_name: fullName,
          role: 'admin',
          is_active: true
        });

      if (insertError) {
        return { success: false, error: insertError.message };
      }

      return { success: true, error: null };
    } catch (error: any) {
      return { success: false, error: error.message };
    }
  }

  // Session management
  onAuthStateChange(callback: (user: AuthUser | null) => void) {
    // Check localStorage for auth state changes
    const checkAuthState = async () => {
      const user = await this.getCurrentUser();
      callback(user);
    };

    // Initial check
    checkAuthState();

    // Listen for storage changes (for multi-tab support)
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'auth_user' || e.key === 'auth_token') {
        checkAuthState();
      }
    };

    window.addEventListener('storage', handleStorageChange);

    // Return cleanup function
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }

  async refreshSession(): Promise<{ user: AuthUser | null; error: string | null }> {
    try {
      const user = await this.getCurrentUser();
      return { user, error: null };
    } catch (error: any) {
      return { user: null, error: error.message };
    }
  }
}

export const authService = new AuthService();
export default AuthService;