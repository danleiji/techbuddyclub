const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

const PUBLIC_DIR = path.join(__dirname, '../public');

// Base SVG for the icon
const svgIcon = `
<svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="512" height="512" fill="#4F46E5"/>
  <text x="256" y="300" font-family="Arial" font-size="240" fill="white" text-anchor="middle">TB</text>
</svg>
`;

async function generateIcons() {
  // Ensure public directory exists
  await fs.mkdir(PUBLIC_DIR, { recursive: true });

  // Write temporary SVG file
  const tempSvgPath = path.join(__dirname, 'temp-icon.svg');
  await fs.writeFile(tempSvgPath, svgIcon);

  // Generate different sizes
  const sizes = {
    'favicon.ico': 32,
    'apple-touch-icon.png': 180,
    'android-chrome-192x192.png': 192,
    'android-chrome-512x512.png': 512,
  };

  // Generate og-image with different dimensions and content
  const ogImageSvg = `
    <svg width="1200" height="630" viewBox="0 0 1200 630" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="1200" height="630" fill="#4F46E5"/>
      <text x="600" y="300" font-family="Arial" font-size="72" fill="white" text-anchor="middle">TechBuddy</text>
      <text x="600" y="400" font-family="Arial" font-size="36" fill="white" text-anchor="middle">Expert Tech Mentorship &amp; Career Resources</text>
    </svg>
  `;

  await fs.writeFile(path.join(__dirname, 'temp-og-image.svg'), ogImageSvg);

  // Generate og-image
  await sharp(path.join(__dirname, 'temp-og-image.svg'))
    .resize(1200, 630)
    .png()
    .toFile(path.join(PUBLIC_DIR, 'og-image.png'));

  // Generate all icon sizes
  for (const [filename, size] of Object.entries(sizes)) {
    if (filename.endsWith('.ico')) {
      await sharp(tempSvgPath)
        .resize(size, size)
        .toFormat('ico')
        .toFile(path.join(PUBLIC_DIR, filename));
    } else {
      await sharp(tempSvgPath)
        .resize(size, size)
        .png()
        .toFile(path.join(PUBLIC_DIR, filename));
    }
  }

  // Clean up temporary files
  await fs.unlink(tempSvgPath);
  await fs.unlink(path.join(__dirname, 'temp-og-image.svg'));

  console.log('All icons generated successfully!');
}

generateIcons().catch(console.error); 