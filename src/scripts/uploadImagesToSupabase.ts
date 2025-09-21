import { supabase } from '../services/supabaseClient';
import fs from 'fs';
import path from 'path';

const BUCKET_NAME = 'images';

// Create storage bucket if it doesn't exist
const createBucket = async () => {
  const { data: buckets } = await supabase.storage.listBuckets();
  const bucketExists = buckets?.some(bucket => bucket.name === BUCKET_NAME);

  if (!bucketExists) {
    const { error } = await supabase.storage.createBucket(BUCKET_NAME, {
      public: true,
      allowedMimeTypes: ['image/*']
    });

    if (error) {
      console.error('Error creating bucket:', error);
      return false;
    }
    console.log('✅ Storage bucket created successfully');
  } else {
    console.log('✅ Storage bucket already exists');
  }
  return true;
};

// Upload a single file to Supabase storage
const uploadFile = async (filePath: string, fileName: string) => {
  try {
    const fileBuffer = fs.readFileSync(filePath);
    const fileExt = path.extname(fileName);
    const storagePath = `uploads/${fileName}`;

    const { data, error } = await supabase.storage
      .from(BUCKET_NAME)
      .upload(storagePath, fileBuffer, {
        contentType: `image/${fileExt.slice(1)}`,
        cacheControl: '3600',
        upsert: true
      });

    if (error) {
      console.error(`❌ Error uploading ${fileName}:`, error);
      return null;
    }

    // Get public URL
    const { data: { publicUrl } } = supabase.storage
      .from(BUCKET_NAME)
      .getPublicUrl(storagePath);

    console.log(`✅ Uploaded ${fileName} -> ${publicUrl}`);
    return publicUrl;
  } catch (error) {
    console.error(`❌ Error uploading ${fileName}:`, error);
    return null;
  }
};

// Main upload function
const uploadAllImages = async () => {
  console.log('🚀 Starting image upload to Supabase...');

  // Create bucket first
  const bucketCreated = await createBucket();
  if (!bucketCreated) {
    console.error('❌ Failed to create or access storage bucket');
    return;
  }

  const uploadsDir = path.join(process.cwd(), 'public', 'uploads');

  if (!fs.existsSync(uploadsDir)) {
    console.error('❌ Uploads directory not found:', uploadsDir);
    return;
  }

  const files = fs.readdirSync(uploadsDir).filter(file =>
    file.toLowerCase().endsWith('.png') ||
    file.toLowerCase().endsWith('.jpg') ||
    file.toLowerCase().endsWith('.jpeg') ||
    file.toLowerCase().endsWith('.webp') ||
    file.toLowerCase().endsWith('.gif')
  );

  console.log(`📁 Found ${files.length} image files to upload`);

  const results = [];
  let successCount = 0;
  let failureCount = 0;

  for (const file of files) {
    const filePath = path.join(uploadsDir, file);
    const result = await uploadFile(filePath, file);

    if (result) {
      successCount++;
      results.push({ fileName: file, url: result, success: true });
    } else {
      failureCount++;
      results.push({ fileName: file, url: null, success: false });
    }

    // Small delay to avoid rate limiting
    await new Promise(resolve => setTimeout(resolve, 100));
  }

  console.log('\n📊 Upload Summary:');
  console.log(`✅ Successfully uploaded: ${successCount} files`);
  console.log(`❌ Failed uploads: ${failureCount} files`);

  if (successCount > 0) {
    console.log('\n🔗 Uploaded file URLs:');
    results.filter(r => r.success).forEach(r => {
      console.log(`${r.fileName} -> ${r.url}`);
    });
  }

  if (failureCount > 0) {
    console.log('\n⚠️  Failed uploads:');
    results.filter(r => !r.success).forEach(r => {
      console.log(`❌ ${r.fileName}`);
    });
  }

  // Create a mapping file for easy reference
  const urlMapping = results.reduce((acc, result) => {
    if (result.success) {
      acc[result.fileName] = result.url;
    }
    return acc;
  }, {} as Record<string, string>);

  fs.writeFileSync(
    path.join(process.cwd(), 'image-urls.json'),
    JSON.stringify(urlMapping, null, 2)
  );

  console.log('\n📝 URL mapping saved to image-urls.json');
  console.log('🎉 Image upload process completed!');
};

// Create a function to get the Supabase URL for an image
export const getSupabaseImageUrl = (filename: string) => {
  return `${supabase.supabaseUrl}/storage/v1/object/public/${BUCKET_NAME}/uploads/${filename}`;
};

// Export the main function
export { uploadAllImages };

// Run the upload if this file is executed directly
if (typeof window === 'undefined' && require.main === module) {
  uploadAllImages().catch(console.error);
}