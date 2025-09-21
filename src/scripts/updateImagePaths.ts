import fs from 'fs';
import path from 'path';

const imageFileMapping = {
  '03b8f2e2-d77d-4eca-a345-c2cece2229a1.png': true,
  '0ea351c1-0550-4c0c-abd6-5c6d4e6baa2f.png': true,
  '18f10993-e4f5-43da-bc62-9bb8b91c831b.png': true,
  '216908a1-4a64-42c2-a2e2-14124db16272.png': true,
  '261b68ae-23fb-437d-995a-403ff4bbf056.png': true,
  '2c075cec-34dd-4472-ae9b-f4589ec58717.png': true,
  '36ebd4ee-4ae7-47bb-a908-71887784211d.png': true,
  '3c492c52-0c9f-4eb3-bff7-459565b79062.png': true,
  '46ed34d3-60c5-4237-b68b-55bed763c123.png': true,
  '4e1cfde7-9f97-4fac-afc5-d2ded8fcf75c.png': true,
  '56328818-6e5e-4d86-82e1-c71024d79b57.png': true,
  '5d79d65e-e8b3-4d40-87d3-456a6761b7fe.png': true,
  '6074b7e0-6cc2-42bc-9bf3-d40648d585e4.png': true,
  '618bf347-e00f-499e-b285-cb3f9de47f74.png': true,
  '62eef464-a6a5-4ba3-bd4e-a435013a4642.png': true,
  '6b8bf146-7cba-4a36-acab-3cfa3b5c853c.png': true,
  '75035d8a-81dd-4e9b-8c53-e5a2a137d14b.png': true,
  '7af257a6-b1c8-4acd-a9ae-5d35e88502a1.png': true,
  '8158b868-6f54-4f56-9c8f-fe130039b5b0.png': true,
  '8546703c-052a-46e4-9120-0c284d769320.png': true,
  '91c69a73-2156-4772-9e10-138542e213ca.png': true,
  '9895fcee-eefa-4a9c-9b60-1e1c3e178934.png': true,
  '9fc19932-8adb-4164-a706-a8ce2bd215d0.png': true,
  'a20fa7a1-a1cf-4dc3-a3d6-e85792c8bb9f.png': true,
  'a7869fd3-1e2d-406d-b4f0-1f3b8ee9d47b.png': true,
  'aa20b959-f2c7-43d8-9ffe-e39e054245fc.png': true,
  'b9c0529d-e69f-453a-a0dd-7b9809a9b7fd.png': true,
  'bc0f764e-77e2-46bc-90d0-73b565c286ee.png': true,
  'be78ac18-90b1-404a-ad08-61d9c2e989f0.png': true,
  'c02b1cd3-e15f-4d44-9220-973df049b070.png': true,
  'c113d034-c105-4e28-b7c6-8f8ccb80e9df.png': true,
  'c605b10f-3c43-4811-a494-34d00588b3a6.png': true,
  'c60e6416-8a97-499c-ba49-d5fb5679ad39.png': true,
  'cafe72a6-1930-4252-b97e-3d1a3d276622.png': true,
  'cb14bca7-2834-40f3-b3f7-1657b696ac7d.png': true,
  'd9136207-a9af-42a8-b4a8-30f7ebebaa48.png': true,
  'eec9055f-d395-49b5-97e3-cb051126ec47.png': true,
  'f0f6b660-5627-4356-8f69-00495e1467d6.png': true,
  'f1f7cd34-6fe3-49ac-a4e6-58da312ca76f.png': true,
  'fefed84c-e7d6-44de-bcbd-67cf41dd2ad6.png': true
};

const updateImagePaths = (filePath: string) => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let hasChanges = false;

    // Replace /uploads/ paths with getSupabaseImageUrl calls
    content = content.replace(/src="\/uploads\/([^"]+)"/g, (match, filename) => {
      if (imageFileMapping[filename]) {
        hasChanges = true;
        return `src={getSupabaseImageUrl("${filename}")}`;
      }
      return match;
    });

    // Also replace direct string references
    content = content.replace(/"\/uploads\/([^"]+)"/g, (match, filename) => {
      if (imageFileMapping[filename]) {
        hasChanges = true;
        return `getSupabaseImageUrl("${filename}")`;
      }
      return match;
    });

    if (hasChanges) {
      // Ensure import is present
      if (!content.includes('import { getSupabaseImageUrl }')) {
        // Find the last import statement
        const importRegex = /import.*from.*["'];/g;
        let lastImportIndex = -1;
        let match;

        while ((match = importRegex.exec(content)) !== null) {
          lastImportIndex = match.index + match[0].length;
        }

        if (lastImportIndex !== -1) {
          const beforeImports = content.substring(0, lastImportIndex);
          const afterImports = content.substring(lastImportIndex);
          content = beforeImports + '\nimport { getSupabaseImageUrl } from "../utils/imageUtils";' + afterImports;
        }
      }

      fs.writeFileSync(filePath, content);
      console.log(`✅ Updated: ${filePath}`);
      return true;
    }

    return false;
  } catch (error) {
    console.error(`❌ Error updating ${filePath}:`, error);
    return false;
  }
};

const processDirectory = (dirPath: string) => {
  const files = fs.readdirSync(dirPath, { withFileTypes: true });
  let totalUpdates = 0;

  files.forEach(file => {
    const fullPath = path.join(dirPath, file.name);

    if (file.isDirectory()) {
      totalUpdates += processDirectory(fullPath);
    } else if (file.name.endsWith('.tsx') || file.name.endsWith('.ts')) {
      if (updateImagePaths(fullPath)) {
        totalUpdates++;
      }
    }
  });

  return totalUpdates;
};

// Main execution
const updateAllImagePaths = () => {
  console.log('🔄 Updating image paths to use Supabase URLs...');

  const srcDir = path.join(process.cwd(), 'src');
  const totalUpdates = processDirectory(srcDir);

  console.log(`\n📊 Summary:`);
  console.log(`✅ Updated ${totalUpdates} files`);
  console.log('🎉 Image path update completed!');
};

// Run if executed directly
if (typeof window === 'undefined' && require.main === module) {
  updateAllImagePaths();
}

export { updateAllImagePaths };