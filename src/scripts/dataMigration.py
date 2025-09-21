#!/usr/bin/env python3

"""
Portfolio Data Migration Script (Python Version)
This script migrates data from existing websites to Supabase
Run with: python src/scripts/dataMigration.py
"""

import os
import json
import secrets
import base64
from datetime import datetime
from supabase import create_client, Client
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Supabase configuration
supabase_url = os.getenv('VITE_SUPABASE_URL')
supabase_service_key = os.getenv('SUPABASE_SERVICE_ROLE_KEY')

if not supabase_url or not supabase_service_key:
    print('❌ Missing Supabase configuration in .env file')
    print('Required variables:')
    print('- VITE_SUPABASE_URL')
    print('- SUPABASE_SERVICE_ROLE_KEY')
    exit(1)

supabase: Client = create_client(supabase_url, supabase_service_key)

# Sample data structure - update this with your existing website data
existing_portfolio_data = {
    "projects": [
        {
            "title": "FairShare: Split Wise Clone",
            "description": "Built a fully client-side app for group expense tracking, settlements, and balances.",
            "image_url": "https://images.unsplash.com/photo-1554224155-6726b3ff858f",
            "technologies": ["React", "React Query", "localStorage", "CSS/SCSS", "Chart.js"],
            "live_url": "",
            "github_url": "https://github.com/udayhese96/FairShare_Splitwise_Clone",
            "is_featured": True,
            "order_index": 1,
            "full_description": "FairShare is a comprehensive expense-sharing application..."
        },
        # Add more projects here
    ],

    "blogs": [
        {
            "title": "Getting Started with React",
            "content": "React is a powerful JavaScript library...",
            "excerpt": "Learn the basics of React development",
            "featured_image": "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
            "is_published": True,
            "slug": "getting-started-with-react",
            "tags": ["React", "JavaScript", "Frontend"]
        },
        # Add more blog posts here
    ],

    "resume": {
        "filename": "Uday_Hese_Resume.pdf",
        "filepath": "./public/resume.pdf",  # Update this path
        "title": "Uday Hese - Full Stack Developer Resume",
        "description": "Complete resume with experience, education, and skills"
    },

    "website_content": {
        "hero": {
            "name": "Uday Hese",
            "title": "Full Stack Developer",
            "bio": "Crafting the Future with Code & AI",
            "description": "Hi, I'm Uday — a final-year CS-AI student passionate about solving real-world problems through full stack development and machine learning."
        },
        "about": {
            "description": "I'm a Computer Science student passionate about creating robust, user-friendly web applications.",
            "years_experience": "2+",
            "projects_completed": "10+",
            "companies_worked": "3+"
        },
        "contact": {
            "email": "uday.22210639@viit.ac.in",
            "phone": "+91-XXXXXXXXXX",  # Add your phone
            "location": "Pune, Maharashtra, India",
            "linkedin": "https://www.linkedin.com/in/udayhese/",
            "github": "https://github.com/udayhese96"
        }
    }
}

def generate_secure_keys():
    """Generate secure random keys for JWT and encryption"""
    print('🔐 Generated Secure Keys:')
    print('Copy these to your .env file:\n')

    jwt_secret = base64.b64encode(secrets.token_bytes(32)).decode('utf-8')
    encryption_key = base64.b64encode(secrets.token_bytes(32)).decode('utf-8')

    print(f'JWT_SECRET={jwt_secret}')
    print(f'ENCRYPTION_KEY={encryption_key}')
    print('')

def create_tables_sql():
    """Print SQL commands to create required tables"""
    print('📋 Creating database tables...')
    print('Please run the following SQL commands in your Supabase dashboard:\n')

    tables_sql = """
-- Create projects table
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

-- Create blogs table
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

-- Create website_content table
CREATE TABLE IF NOT EXISTS website_content (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  section VARCHAR(50) NOT NULL UNIQUE,
  content JSONB NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS on all tables
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE blogs ENABLE ROW LEVEL SECURITY;
ALTER TABLE website_content ENABLE ROW LEVEL SECURITY;
"""

    print(tables_sql)

def upload_resume():
    """Upload resume to Supabase Storage"""
    print('📄 Uploading resume to Supabase Storage...')

    resume_data = existing_portfolio_data["resume"]

    if not os.path.exists(resume_data["filepath"]):
        print(f'⚠️  Resume file not found at {resume_data["filepath"]}')
        print('Please ensure your resume is in the correct location')
        return None

    try:
        with open(resume_data["filepath"], 'rb') as file:
            file_content = file.read()

        file_name = f'resume/{resume_data["filename"]}'

        # Upload file
        result = supabase.storage.from_('documents').upload(
            file_name,
            file_content,
            file_options={
                "content-type": "application/pdf",
                "cache-control": "3600",
                "upsert": True
            }
        )

        if result.error:
            print(f'❌ Error uploading resume: {result.error}')
            return None

        # Get public URL
        public_url = supabase.storage.from_('documents').get_public_url(file_name)

        print(f'✅ Resume uploaded successfully: {public_url}')
        return public_url

    except Exception as error:
        print(f'❌ Error uploading resume: {error}')
        return None

def migrate_projects():
    """Migrate projects to Supabase"""
    print('🚀 Migrating projects...')

    for project in existing_portfolio_data["projects"]:
        try:
            result = supabase.table('projects').insert({
                "title": project["title"],
                "description": project["description"],
                "full_description": project.get("full_description"),
                "image_url": project["image_url"],
                "technologies": project["technologies"],
                "live_url": project["live_url"],
                "github_url": project["github_url"],
                "is_featured": project["is_featured"],
                "order_index": project["order_index"]
            }).execute()

            # Check for errors in different response formats
            if hasattr(result, 'error') and result.error:
                print(f'❌ Error migrating project "{project["title"]}": {result.error}')
            elif isinstance(result, dict) and 'error' in result and result['error']:
                print(f'❌ Error migrating project "{project["title"]}": {result["error"]}')
            elif hasattr(result, 'data') and result.data:
                print(f'✅ Migrated project: {project["title"]}')
            else:
                print(f'✅ Migrated project: {project["title"]}')

        except Exception as error:
            print(f'❌ Error migrating project "{project["title"]}": {error}')

def migrate_blogs():
    """Migrate blogs to Supabase"""
    print('📰 Migrating blogs...')

    for blog in existing_portfolio_data["blogs"]:
        try:
            result = supabase.table('blogs').insert({
                "title": blog["title"],
                "content": blog["content"],
                "excerpt": blog["excerpt"],
                "featured_image": blog["featured_image"],
                "is_published": blog["is_published"],
                "slug": blog["slug"],
                "tags": blog["tags"]
            }).execute()

            # Check for errors in different response formats
            if hasattr(result, 'error') and result.error:
                print(f'❌ Error migrating blog "{blog["title"]}": {result.error}')
            elif isinstance(result, dict) and 'error' in result and result['error']:
                print(f'❌ Error migrating blog "{blog["title"]}": {result["error"]}')
            elif hasattr(result, 'data') and result.data:
                print(f'✅ Migrated blog: {blog["title"]}')
            else:
                print(f'✅ Migrated blog: {blog["title"]}')

        except Exception as error:
            print(f'❌ Error migrating blog "{blog["title"]}": {error}')

def migrate_website_content():
    """Migrate website content to Supabase"""
    print('🎨 Migrating website content...')

    content = existing_portfolio_data["website_content"]

    for section, section_content in content.items():
        try:
            result = supabase.table('website_content').upsert({
                "section": section,
                "content": section_content
            }).execute()

            # Check for errors in different response formats
            if hasattr(result, 'error') and result.error:
                print(f'❌ Error migrating {section} content: {result.error}')
            elif isinstance(result, dict) and 'error' in result and result['error']:
                print(f'❌ Error migrating {section} content: {result["error"]}')
            elif hasattr(result, 'data') and result.data:
                print(f'✅ Migrated {section} content')
            else:
                print(f'✅ Migrated {section} content')

        except Exception as error:
            print(f'❌ Error migrating {section} content: {error}')

def create_storage_buckets():
    """Create storage buckets in Supabase"""
    print('🗂️  Creating storage buckets...')

    try:
        # Create documents bucket for resume
        result = supabase.storage.create_bucket(
            'documents',
            options={
                "public": True,
                "allowedMimeTypes": [
                    "application/pdf",
                    "application/msword",
                    "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                ]
            }
        )

        # Check if there's an error in the response
        if hasattr(result, 'error') and result.error and "already exists" not in str(result.error):
            print(f'❌ Error creating documents bucket: {result.error}')
        elif isinstance(result, dict) and 'error' in result and result['error'] and "already exists" not in str(result['error']):
            print(f'❌ Error creating documents bucket: {result["error"]}')
        else:
            print('✅ Documents bucket ready')

    except Exception as error:
        print(f'❌ Error creating documents bucket: {error}')

def export_current_data():
    """Export current database data to backup file"""
    print('💾 Exporting current database data...')

    try:
        backup = {
            "timestamp": datetime.now().isoformat(),
            "projects": [],
            "blogs": [],
            "website_content": [],
            "contact_messages": []
        }

        # Fetch existing data
        projects_result = supabase.table('projects').select('*').execute()
        blogs_result = supabase.table('blogs').select('*').execute()
        content_result = supabase.table('website_content').select('*').execute()
        messages_result = supabase.table('contact_messages').select('*').execute()

        backup["projects"] = projects_result.data or []
        backup["blogs"] = blogs_result.data or []
        backup["website_content"] = content_result.data or []
        backup["contact_messages"] = messages_result.data or []

        # Save to file
        backup_file = f'backup_{int(datetime.now().timestamp())}.json'
        with open(backup_file, 'w') as f:
            json.dump(backup, f, indent=2)

        print(f'✅ Data backed up to: {backup_file}')
        return backup

    except Exception as error:
        print(f'❌ Error exporting data: {error}')
        return None

def run_migration():
    """Main migration function"""
    print('🔄 Starting Portfolio Data Migration...\n')

    try:
        # Step 1: Export current data (backup)
        export_current_data()

        # Step 2: Create storage buckets
        create_storage_buckets()

        # Step 3: Show table creation SQL
        create_tables_sql()

        print('\n⚠️  Please run the above SQL commands in your Supabase dashboard first!\n')

        # Step 4: Upload resume
        resume_url = upload_resume()

        # Step 5: Migrate data
        migrate_projects()
        migrate_blogs()
        migrate_website_content()

        print('\n🎉 Migration completed successfully!')
        print('\n📋 Summary:')
        print(f'- Projects: {len(existing_portfolio_data["projects"])} items')
        print(f'- Blogs: {len(existing_portfolio_data["blogs"])} items')
        print(f'- Website content: {len(existing_portfolio_data["website_content"])} sections')
        if resume_url:
            print('- Resume: uploaded successfully')

    except Exception as error:
        print(f'❌ Migration failed: {error}')

def main():
    """Command line interface"""
    import sys

    if len(sys.argv) < 2:
        print('Portfolio Data Migration Tool\n')
        print('Usage:')
        print('  python src/scripts/dataMigration.py migrate  - Run full migration')
        print('  python src/scripts/dataMigration.py keys    - Generate secure keys')
        print('  python src/scripts/dataMigration.py backup  - Backup current data')
        print('  python src/scripts/dataMigration.py tables  - Show table creation SQL')
        print('')
        return

    command = sys.argv[1]

    if command == 'migrate':
        run_migration()
    elif command == 'keys':
        generate_secure_keys()
    elif command == 'backup':
        export_current_data()
    elif command == 'tables':
        create_tables_sql()
    else:
        print(f'Unknown command: {command}')

if __name__ == '__main__':
    main()