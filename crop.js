const fs = require('fs');
const Jimp = require('jimp');

async function processImage() {
    console.log("Loading image...");
    const imagePath = "C:\\Users\\LENOVO\\.gemini\\antigravity-ide\\brain\\91c3a866-1319-4693-a7e1-6142e1a86e82\\.user_uploaded\\media_1787237169892.jpg";
    const image = await Jimp.read(imagePath);
    
    const width = image.bitmap.width;
    const height = image.bitmap.height;
    
    console.log(`Image size: ${width}x${height}`);
    
    const cols = 4;
    const rows = 2;
    const w = Math.floor(width / cols);
    const h = Math.floor(height / rows);
    
    console.log(`Each cell size: ${w}x${h}`);
    
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            const x = c * w;
            const y = r * h;
            const index = r * cols + c + 1;
            
            console.log(`Cropping cell ${index} at x:${x} y:${y}`);
            
            const clone = image.clone();
            clone.crop(x, y, w, h);
            
            // Try to make black transparent (simple threshold)
            clone.scan(0, 0, clone.bitmap.width, clone.bitmap.height, function(x, y, idx) {
                const red = this.bitmap.data[idx + 0];
                const green = this.bitmap.data[idx + 1];
                const blue = this.bitmap.data[idx + 2];
                // if it's very dark, make it transparent
                if (red < 15 && green < 15 && blue < 15) {
                    this.bitmap.data[idx + 3] = 0; // alpha
                }
            });
            
            await clone.writeAsync(`assets/char_${index}.png`);
        }
    }
    console.log("Done cropping!");
}

processImage().catch(console.error);
