import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    res.status(405).json({ success: false, message: 'Method not allowed' });
    return;
  }

  const { name, email, subject, message } = req.body;

  // Validate required fields
  if (!name || !email || !subject || !message) {
    res.status(400).json({
      success: false,
      message: 'All fields are required'
    });
    return;
  }

  try {
    // Create SMTP transporter
    const transporter = nodemailer.createTransporter({
      host: process.env.VITE_SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.VITE_SMTP_PORT || '587'),
      secure: process.env.VITE_SMTP_SECURE === 'true',
      auth: {
        user: process.env.VITE_SMTP_USER,
        pass: process.env.VITE_SMTP_PASS,
      },
    });

    // Verify transporter
    await transporter.verify();

    // Email to admin
    const adminMailOptions = {
      from: `"${process.env.VITE_FROM_NAME || 'Portfolio Contact'}" <${process.env.VITE_FROM_EMAIL}>`,
      to: process.env.VITE_ADMIN_EMAIL || 'udayhese0101@gmail.com',
      replyTo: email,
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #00ffff; border-bottom: 2px solid #00ffff; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>

          <div style="background: #1a1a1a; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #00ffff; margin-top: 0;">Contact Details:</h3>
            <p><strong style="color: #00ffff;">Name:</strong> ${name}</p>
            <p><strong style="color: #00ffff;">Email:</strong> ${email}</p>
            <p><strong style="color: #00ffff;">Subject:</strong> ${subject}</p>
          </div>

          <div style="background: #1a1a1a; padding: 20px; border-radius: 8px;">
            <h3 style="color: #00ffff; margin-top: 0;">Message:</h3>
            <p style="color: #ffffff; line-height: 1.6;">${message}</p>
          </div>

          <div style="margin-top: 20px; padding: 15px; background: #0a4a5a; border-radius: 8px;">
            <p style="margin: 0; color: #00ffff; font-size: 14px;">
              This message was sent from your portfolio contact form.
            </p>
          </div>
        </div>
      `,
      text: `
        New Contact Form Submission

        Name: ${name}
        Email: ${email}
        Subject: ${subject}

        Message:
        ${message}

        This message was sent from your portfolio contact form.
      `
    };

    // Send email
    await transporter.sendMail(adminMailOptions);

    res.status(200).json({
      success: true,
      message: 'Email sent successfully!'
    });

  } catch (error) {
    console.error('Email sending error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send email. Please try again later.'
    });
  }
}