const fs = require('fs');
const path = require('path');
const { createCanvas } = require('canvas');

// Ensure icons directory exists
const iconsDir = path.join(__dirname, 'icons');
if (!fs.existsSync(iconsDir)) {
    fs.mkdirSync(iconsDir);
}

const sizes = [16, 48, 128];

sizes.forEach(size => {
    try {
        const canvas = createCanvas(size, size);
        const ctx = canvas.getContext('2d');
        
        // Draw background
        ctx.fillStyle = '#4285f4';
        ctx.fillRect(0, 0, size, size);
        
        // Draw 'C' letter
        ctx.fillStyle = 'white';
        ctx.font = `bold ${size * 0.6}px Arial`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('C', size/2, size/2);
        
        // Save to file
        const buffer = canvas.toBuffer('image/png');
        const filePath = path.join(iconsDir, `icon${size}.png`);
        fs.writeFileSync(filePath, buffer);
        console.log(`Created icon: ${filePath}`);
    } catch (error) {
        console.error(`Error creating ${size}x${size} icon:`, error);
    }
});