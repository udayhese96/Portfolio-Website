#!/usr/bin/env node

/**
 * Portfolio Data Migration Script
 * This script migrates data from existing websites to Supabase
 * Run with: node src/scripts/dataMigration.js
 */

const fs = require('fs');
const path = require('path');
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

// Supabase configuration
const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('❌ Missing Supabase configuration in .env file');
  console.log('Required variables:');
  console.log('- VITE_SUPABASE_URL');
  console.log('- SUPABASE_SERVICE_ROLE_KEY');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

// Sample data structure - update this with your existing website data
const existingPortfolioData = {
  projects: [
    {
      title: "FairShare: Split Wise Clone",
      description: "Built a fully client-side app for group expense tracking, settlements, and balances.",
      image_url: "https://images.unsplash.com/photo-1554224155-6726b3ff858f",
      technologies: ["React", "React Query", "localStorage", "CSS/SCSS", "Chart.js"],
      live_url: "",
      github_url: "https://github.com/udayhese96/FairShare_Splitwise_Clone",
      is_featured: true,
      order_index: 1,
      full_description: "FairShare is a comprehensive expense-sharing application..."
    },
    // Add more projects here
  ],

  blogs: [
    {
      title: "Getting Started with React",
      content: "React is a powerful JavaScript library...",
      excerpt: "Learn the basics of React development",
      featured_image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
      is_published: true,
      slug: "getting-started-with-react",
      tags: ["React", "JavaScript", "Frontend"]
    },
    // Add more blog posts here
  ],

  resume: {
    filename: "Uday_Hese_Resume.pdf",
    filepath: "./public/resume.pdf", // Update this path
    title: "Uday Hese - Full Stack Developer Resume",
    description: "Complete resume with experience, education, and skills"
  },

  website_content: {
    hero: {
      name: "Uday Hese",
      title: "Full Stack Developer",
      bio: "Crafting the Future with Code & AI",
      description: "Hi, I'm Uday — a final-year CS-AI student passionate about solving real-world problems through full stack development and machine learning."
    },
    about: {
      description: "I'm a Computer Science student passionate about creating robust, user-friendly web applications.",
      years_experience: "2+",
      projects_completed: "10+",
      companies_worked: "3+"
    },
    contact: {
      email: "uday.22210639@viit.ac.in",
      phone: "+91-XXXXXXXXXX", // Add your phone
      location: "Pune, Maharashtra, India",
      linkedin: "https://www.linkedin.com/in/udayhese/",
      github: "https://github.com/udayhese96"
    }
  }
};

// Migration functions
async function createProjectsTable() {
  console.log('📋 Creating projects table...');

  // This would typically be done in Supabase dashboard, but here's the structure
  const createTableSQL = `
    CREATE TABLE IF NOT EXISTS projects (
      id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      description TEXT,
      full_description TEXT,
      image_url TEXT,
      technologies JSONB,
      live_url TEXT,
      github_url TEXT,
      is_featured BOOLEAN DEFAULT false,
      order_index INTEGER DEFAULT 0,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
      updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
    );
  `;

  console.log('SQL for projects table:');
  console.log(createTableSQL);
}

async function createBlogsTable() {
  console.log('📝 Creating blogs table...');

  const createTableSQL = `
    CREATE TABLE IF NOT EXISTS blogs (
      id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      content TEXT,
      excerpt TEXT,
      featured_image TEXT,
      is_published BOOLEAN DEFAULT false,
      slug VARCHAR(255) UNIQUE,
      tags JSONB,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
      updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
    );
  `;

  console.log('SQL for blogs table:');
  console.log(createTableSQL);
}

async function createWebsiteContentTable() {
  console.log('🌐 Creating website_content table...');

  const createTableSQL = `
    CREATE TABLE IF NOT EXISTS website_content (
      id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
      section VARCHAR(50) NOT NULL,
      content JSONB NOT NULL,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
      updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
    );
  `;

  console.log('SQL for website_content table:');
  console.log(createTableSQL);
}

async function uploadResume() {
  console.log('📄 Uploading resume to Supabase Storage...');

  const resumeData = existingPortfolioData.resume;

  if (!fs.existsSync(resumeData.filepath)) {
    console.log(`⚠️  Resume file not found at ${resumeData.filepath}`);
    console.log('Please ensure your resume is in the correct location');
    return null;
  }

  try {
    const fileBuffer = fs.readFileSync(resumeData.filepath);
    const fileName = `resume/${resumeData.filename}`;

    const { data, error } = await supabase.storage
      .from('documents') // Create this bucket in Supabase
      .upload(fileName, fileBuffer, {
        contentType: 'application/pdf',
        cacheControl: '3600',
        upsert: true
      });

    if (error) {
      console.error('❌ Error uploading resume:', error);
      return null;
    }

    // Get public URL
    const { data: { publicUrl } } = supabase.storage
      .from('documents')
      .getPublicUrl(fileName);

    console.log('✅ Resume uploaded successfully:', publicUrl);
    return publicUrl;

  } catch (error) {
    console.error('❌ Error uploading resume:', error);
    return null;
  }
}

async function migrateProjects() {
  console.log('🚀 Migrating projects...');

  for (const project of existingPortfolioData.projects) {
    try {
      const { data, error } = await supabase
        .from('projects')
        .insert({
          title: project.title,
          description: project.description,
          full_description: project.full_description,
          image_url: project.image_url,
          technologies: project.technologies,
          live_url: project.live_url,
          github_url: project.github_url,
          is_featured: project.is_featured,
          order_index: project.order_index
        });

      if (error) {
        console.error(`❌ Error migrating project "${project.title}":`, error);
      } else {
        console.log(`✅ Migrated project: ${project.title}`);
      }
    } catch (error) {
      console.error(`❌ Error migrating project "${project.title}":`, error);
    }
  }
}

async function migrateBlogs() {
  console.log('📰 Migrating blogs...');

  for (const blog of existingPortfolioData.blogs) {
    try {
      const { data, error } = await supabase
        .from('blogs')
        .insert({
          title: blog.title,
          content: blog.content,
          excerpt: blog.excerpt,
          featured_image: blog.featured_image,
          is_published: blog.is_published,
          slug: blog.slug,
          tags: blog.tags
        });

      if (error) {
        console.error(`❌ Error migrating blog "${blog.title}":`, error);
      } else {
        console.log(`✅ Migrated blog: ${blog.title}`);
      }
    } catch (error) {
      console.error(`❌ Error migrating blog "${blog.title}":`, error);
    }
  }
}

async function migrateWebsiteContent() {
  console.log('🎨 Migrating website content...');

  const content = existingPortfolioData.website_content;

  // Insert each section
  for (const [section, sectionContent] of Object.entries(content)) {
    try {
      const { data, error } = await supabase
        .from('website_content')
        .upsert({
          section,
          content: sectionContent
        }, {
          onConflict: 'section'
        });

      if (error) {
        console.error(`❌ Error migrating ${section} content:`, error);
      } else {
        console.log(`✅ Migrated ${section} content`);
      }
    } catch (error) {
      console.error(`❌ Error migrating ${section} content:`, error);
    }
  }
}

async function createStorageBuckets() {
  console.log('🗂️  Creating storage buckets...');

  // Create documents bucket for resume
  try {
    const { data, error } = await supabase.storage.createBucket('documents', {
      public: true,
      allowedMimeTypes: ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
    });

    if (error && !error.message.includes('already exists')) {
      console.error('❌ Error creating documents bucket:', error);
    } else {
      console.log('✅ Documents bucket ready');
    }
  } catch (error) {
    console.error('❌ Error creating documents bucket:', error);
  }
}

async function exportCurrentData() {
  console.log('💾 Exporting current database data...');

  try {
    // Export existing data to backup file
    const backup = {
      timestamp: new Date().toISOString(),
      projects: [],
      blogs: [],
      website_content: [],
      contact_messages: []
    };

    // Fetch existing data
    const { data: projects } = await supabase.from('projects').select('*');
    const { data: blogs } = await supabase.from('blogs').select('*');
    const { data: websiteContent } = await supabase.from('website_content').select('*');
    const { data: messages } = await supabase.from('contact_messages').select('*');

    backup.projects = projects || [];
    backup.blogs = blogs || [];
    backup.website_content = websiteContent || [];
    backup.contact_messages = messages || [];

    // Save to file
    const backupFile = `backup_${Date.now()}.json`;
    fs.writeFileSync(backupFile, JSON.stringify(backup, null, 2));
    console.log(`✅ Data backed up to: ${backupFile}`);

    return backup;
  } catch (error) {
    console.error('❌ Error exporting data:', error);
    return null;
  }
}

// Main migration function
async function runMigration() {
  console.log('🔄 Starting Portfolio Data Migration...\n');

  try {
    // Step 1: Export current data (backup)
    await exportCurrentData();

    // Step 2: Create storage buckets
    await createStorageBuckets();

    // Step 3: Show table creation SQL
    await createProjectsTable();
    await createBlogsTable();
    await createWebsiteContentTable();

    console.log('\n⚠️  Please run the above SQL commands in your Supabase dashboard first!\n');

    // Step 4: Upload resume
    const resumeUrl = await uploadResume();

    // Step 5: Migrate data
    await migrateProjects();
    await migrateBlogs();
    await migrateWebsiteContent();

    console.log('\n🎉 Migration completed successfully!');
    console.log('\n📋 Summary:');
    console.log(`- Projects: ${existingPortfolioData.projects.length} items`);
    console.log(`- Blogs: ${existingPortfolioData.blogs.length} items`);
    console.log(`- Website content: ${Object.keys(existingPortfolioData.website_content).length} sections`);
    if (resumeUrl) {
      console.log(`- Resume: uploaded successfully`);
    }

  } catch (error) {
    console.error('❌ Migration failed:', error);
  }
}

// Generate secure keys function
function generateSecureKeys() {
  const crypto = require('crypto');

  console.log('🔐 Generated Secure Keys:');
  console.log('Copy these to your .env file:\n');
  console.log(`JWT_SECRET=${crypto.randomBytes(32).toString('base64')}`);
  console.log(`ENCRYPTION_KEY=${crypto.randomBytes(32).toString('base64')}`);
  console.log('');
}

// Command line interface
const command = process.argv[2];

switch (command) {
  case 'migrate':
    runMigration();
    break;
  case 'keys':
    generateSecureKeys();
    break;
  case 'backup':
    exportCurrentData();
    break;
  default:
    console.log('Portfolio Data Migration Tool\n');
    console.log('Usage:');
    console.log('  node src/scripts/dataMigration.js migrate  - Run full migration');
    console.log('  node src/scripts/dataMigration.js keys    - Generate secure keys');
    console.log('  node src/scripts/dataMigration.js backup  - Backup current data');
    console.log('');
}

module.exports = {
  runMigration,
  generateSecureKeys,
  exportCurrentData
};