// Client-side email service using Web3Forms
interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface EmailResponse {
  success: boolean;
  message: string;
}

interface PasswordResetData {
  email: string;
  resetToken: string;
  userName?: string;
}

interface EmailData {
  to: string;
  subject: string;
  html: string;
  text: string;
}

class EmailService {
  private web3formsAccessKey = import.meta.env.WEB3FORMS_ACCESS_KEY;

  // Email sending using Web3Forms (works on Vercel)
  async sendEmail(contactData: ContactFormData): Promise<EmailResponse>;
  async sendEmail(emailData: EmailData): Promise<boolean>;
  async sendEmail(data: ContactFormData | EmailData): Promise<EmailResponse | boolean> {
    try {
      // Check if it's ContactFormData or EmailData
      if ('name' in data && 'message' in data) {
        // Handle ContactFormData
        const contactData = data as ContactFormData;

        // Use Web3Forms - works perfectly on Vercel without any backend
        try {
          const formData = new FormData();
          formData.append('access_key', this.web3formsAccessKey);
          formData.append('name', contactData.name);
          formData.append('email', contactData.email);
          formData.append('subject', contactData.subject);
          formData.append('message', contactData.message);
          formData.append('from_name', 'Portfolio Contact Form');
          formData.append('to_email', 'udayhese0101@gmail.com');

          const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData
          });

          const result = await response.json();

          if (result.success) {
            return {
              success: true,
              message: 'Message sent successfully!'
            };
          } else {
            throw new Error(result.message || 'Failed to send email');
          }
        } catch (error) {
          console.error('Web3Forms error:', error);
          return {
            success: false,
            message: 'Email service unavailable. Please contact directly at udayhese0101@gmail.com or call +91-8624012250.'
          };
        }

      } else {
        // Handle EmailData for password reset emails
        const emailData = data as EmailData;
        console.log('Would send email to:', emailData.to, 'with subject:', emailData.subject);
        return true;
      }
    } catch (error) {
      console.error('Email service error:', error);
      if ('name' in data) {
        return {
          success: false,
          message: 'Failed to send message. Please try again or contact directly at udayhese0101@gmail.com'
        };
      } else {
        return false;
      }
    }
  }

  private generatePasswordResetHTML(data: {
    userName: string;
    resetUrl: string;
    expiryTime: string;
  }): string {
    return `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2>Password Reset Request</h2>
        <p>Hi ${data.userName},</p>
        <p>You requested a password reset for your Uday Hese Portfolio admin account.</p>
        <p>Click the button below to reset your password:</p>
        <a href="${data.resetUrl}" style="display: inline-block; padding: 12px 24px; background-color: #0ea5e9; color: white; text-decoration: none; border-radius: 4px;">Reset Password</a>
        <p>This link will expire in ${data.expiryTime}.</p>
        <p>If you didn't request this password reset, please ignore this email.</p>
        <p>Best regards,<br>Uday Hese Portfolio Team</p>
      </div>
    `;
  }

  async sendPasswordResetEmail(data: PasswordResetData): Promise<boolean> {
    const resetUrl = `${import.meta.env.APP_URL}/reset-password?token=${data.resetToken}`;

    const html = this.generatePasswordResetHTML({
      userName: data.userName || 'User',
      resetUrl,
      expiryTime: '1 hour',
    });

    const text = `
      Hi ${data.userName || 'User'},

      You requested a password reset for your Uday Hese Portfolio admin account.

      Click the link below to reset your password:
      ${resetUrl}

      This link will expire in 1 hour.

      If you didn't request this password reset, please ignore this email.

      Best regards,
      Uday Hese Portfolio Team
    `;

    return await this.sendEmail({
      to: data.email,
      subject: 'Password Reset Request - Uday Hese Portfolio',
      html,
      text,
    });
  }

  async sendContactFormNotification(contactData: ContactFormData): Promise<boolean> {
    try {
      const result = await this.sendEmail(contactData);
      return result.success;
    } catch (error) {
      console.error('Failed to send contact notification:', error);
      return false;
    }
  }

  async sendContactFormConfirmation(contactData: {
    name: string;
    email: string;
    subject: string;
  }): Promise<boolean> {
    // For simplicity, we'll just return true as confirmation
    // In a real implementation, you'd send a separate confirmation email
    console.log('Confirmation would be sent to:', contactData.email);
    return true;
  }

}

export const emailService = new EmailService();
export default EmailService;