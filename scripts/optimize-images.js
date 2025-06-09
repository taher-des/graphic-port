const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

const PUBLIC_DIR = path.join(process.cwd(), 'public');
const MAX_WIDTH = 1920; // Maximum width for images
const QUALITY = 80; // JPEG/WebP quality

async function optimizeImage(filePath) {
  try {
    const image = sharp(filePath);
    const metadata = await image.metadata();
    
    // Skip if already optimized
    if (filePath.includes('.webp')) {
      console.log(`Skipping ${filePath} - already optimized`);
      return;
    }

    // Calculate new dimensions while maintaining aspect ratio
    let width = metadata.width;
    let height = metadata.height;
    
    if (width > MAX_WIDTH) {
      height = Math.round((height * MAX_WIDTH) / width);
      width = MAX_WIDTH;
    }

    // Create WebP version
    const webpPath = filePath.replace(/\.[^/.]+$/, '.webp');
    await image
      .resize(width, height, {
        fit: 'inside',
        withoutEnlargement: true
      })
      .webp({ quality: QUALITY })
      .toFile(webpPath);

    console.log(`Optimized ${filePath} -> ${webpPath}`);
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error);
  }
}

async function processDirectory(directory) {
  try {
    const files = await fs.readdir(directory);
    
    for (const file of files) {
      const filePath = path.join(directory, file);
      const stat = await fs.stat(filePath);
      
      if (stat.isDirectory()) {
        await processDirectory(filePath);
      } else if (/\.(jpg|jpeg|png|gif)$/i.test(file)) {
        await optimizeImage(filePath);
      }
    }
  } catch (error) {
    console.error(`Error processing directory ${directory}:`, error);
  }
}

// Run the optimization
processDirectory(PUBLIC_DIR)
  .then(() => console.log('Image optimization complete!'))
  .catch(console.error); 