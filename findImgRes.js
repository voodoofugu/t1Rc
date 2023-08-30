const fs = require("fs");
const path = require("path");
const axios = require("axios");

const stylesPath = path.join(__dirname, "src", "styles");
const imgPath = path.join(__dirname, "src", "img");
const remoteImgBaseUrl = "";

async function downloadImage(url, destination) {
    try {
        const response = await axios.get(url, { responseType: "arraybuffer" });
        fs.writeFileSync(destination, response.data);
        console.log(`Downloaded ${url} to ${destination}`);
    } catch (error) {
        console.error(`Failed to download ${url}: ${error.message}`);
    }
}

async function processStylesDirectory(directoryPath) {
    const files = fs.readdirSync(directoryPath);
    for (const file of files) {
        const filePath = path.join(directoryPath, file);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
            await processStylesDirectory(filePath);
        } else if (path.extname(file) === ".scss") {
            const content = fs.readFileSync(filePath, "utf-8");
            const imageUrlMatches = content.match(
                /url\(['"]?([^'"\)]+)['"]?\)/g
            );
            if (imageUrlMatches) {
                for (const imageUrlMatch of imageUrlMatches) {
                    const imageUrl = imageUrlMatch.match(
                        /url\(['"]?([^'"\)]+)['"]?\)/
                    )[1];
                    const imageName = path.basename(imageUrl);
                    const localImagePath = path.join(imgPath, imageName);
                    const remoteImageUrl = remoteImgBaseUrl + imageName;
                    if (!fs.existsSync(localImagePath)) {
                        await downloadImage(remoteImageUrl, localImagePath);
                    }
                }
            }
        }
    }
}

if (!fs.existsSync(imgPath)) {
    fs.mkdirSync(imgPath);
}

processStylesDirectory(stylesPath);
