import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const directory = path.resolve(__dirname, './public/images');

async function optimizeImages() {
  try {
    const files = await fs.readdir(directory);
    
    for (const file of files) {
      if (file.endsWith('.png')) {
        const filePath = path.join(directory, file);
        const webpPath = path.join(directory, file.replace('.png', '.webp'));
        
        console.log(`Optimizing ${file}...`);
        
        await sharp(filePath)
          .resize({ width: 1200, withoutEnlargement: true })
          .webp({ quality: 80 })
          .toFile(webpPath);
          
        console.log(`Created ${webpPath}`);
        
        // Optionally delete the original PNG if optimization is successful
        await fs.unlink(filePath);
        console.log(`Deleted original ${file}`);
      }
    }
    console.log('Image optimization complete.');
  } catch (err) {
    console.error('Error optimizing images:', err);
  }
}

optimizeImages();
