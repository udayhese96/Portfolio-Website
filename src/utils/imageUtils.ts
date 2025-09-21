import { supabase } from '../services/supabaseClient';

const BUCKET_NAME = 'images';

export const getSupabaseImageUrl = (filename: string) => {
  // If it's already a full URL, return as is
  if (filename.startsWith('http')) {
    return filename;
  }

  // Remove leading slash and "uploads/" if present
  const cleanFilename = filename.replace(/^\/?(uploads\/)?/, '');

  return `${supabase.supabaseUrl}/storage/v1/object/public/${BUCKET_NAME}/uploads/${cleanFilename}`;
};

// Helper function to convert local upload paths to Supabase URLs
export const convertUploadPath = (path: string) => {
  if (path.startsWith('/uploads/')) {
    const filename = path.replace('/uploads/', '');
    return getSupabaseImageUrl(filename);
  }
  return path;
};