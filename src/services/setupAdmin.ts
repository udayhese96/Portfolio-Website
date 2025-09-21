import { supabase } from './supabaseClient';
import bcrypt from 'bcryptjs';

export const setupInitialAdmin = async () => {
  try {
    const adminEmail = 'uday.22210639@viit.ac.in';
    const defaultPassword = 'admin123';
    const fullName = 'Uday Hese';

    // Check if admin already exists
    const { data: existingAdmin } = await supabase
      .from('admin_users')
      .select('email')
      .eq('email', adminEmail)
      .single();

    if (existingAdmin) {
      console.log('Admin user already exists');
      return { success: true, message: 'Admin user already exists' };
    }

    // Hash password
    const saltRounds = 12;
    const hashedPassword = await bcrypt.hash(defaultPassword, saltRounds);

    // Create admin user
    const { error: insertError } = await supabase
      .from('admin_users')
      .insert({
        email: adminEmail,
        password_hash: hashedPassword,
        full_name: fullName,
        role: 'admin',
        is_active: true,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      });

    if (insertError) {
      console.error('Error creating admin user:', insertError);
      return { success: false, error: insertError.message };
    }

    console.log('Admin user created successfully');
    console.log('Email:', adminEmail);
    console.log('Default Password:', defaultPassword);
    console.log('Please change the password after first login!');

    return { success: true, message: 'Admin user created successfully' };
  } catch (error: any) {
    console.error('Setup error:', error);
    return { success: false, error: error.message };
  }
};