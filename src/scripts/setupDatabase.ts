import { supabase } from '../services/supabaseClient';
import { setupInitialAdmin } from '../services/setupAdmin';

const createTables = async () => {
  console.log('Creating database tables...');

  // Since we can't create tables directly from client-side code,
  // we'll just check if tables exist and provide SQL instructions
  console.log('📝 Please run the following SQL commands in your Supabase dashboard:');

  console.log(`
-- Create admin_users table
CREATE TABLE IF NOT EXISTS admin_users (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  full_name VARCHAR(255),
  role VARCHAR(50) DEFAULT 'admin',
  is_active BOOLEAN DEFAULT true,
  last_login TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create password_reset_tokens table
CREATE TABLE IF NOT EXISTS password_reset_tokens (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES admin_users(id) ON DELETE CASCADE,
  token VARCHAR(255) UNIQUE NOT NULL,
  expires_at TIMESTAMP WITH TIME ZONE NOT NULL,
  used_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create contact_messages table
CREATE TABLE IF NOT EXISTS contact_messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  subject VARCHAR(500) NOT NULL,
  message TEXT NOT NULL,
  is_read BOOLEAN DEFAULT false,
  is_replied BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS (Row Level Security)
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE password_reset_tokens ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;
  `);
};

const setupDatabase = async () => {
  try {
    console.log('Setting up database...');

    // Create all necessary tables
    await createTables();

    // Setup initial admin user
    console.log('Setting up admin user...');
    const adminResult = await setupInitialAdmin();

    if (adminResult.success) {
      console.log('✅ Database setup completed successfully!');
      console.log('🔑 Admin Login Details:');
      console.log('📧 Email: uday.22210639@viit.ac.in');
      console.log('🔐 Password: admin123');
      console.log('⚠️  Please change the password after first login!');
    } else {
      console.error('❌ Failed to setup admin user:', adminResult.error);
    }

  } catch (error) {
    console.error('❌ Database setup failed:', error);
  }
};

// Run the setup if this file is executed directly
if (typeof window === 'undefined') {
  setupDatabase();
}

export { setupDatabase };