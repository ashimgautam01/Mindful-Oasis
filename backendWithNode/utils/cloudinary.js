import { v2 as cloudinary } from "cloudinary";
import fs from "fs/promises"; 
import sharp from "sharp";
import path from "path";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_SCRT,
});

const deleteLocalFile = async (filepath) => {
  try {
    await fs.access(filepath);   
    await fs.unlink(filepath);  
    console.log(`Local file ${filepath} deleted.`);
  } catch (error) {
    console.error(`Error deleting local file: ${error.message}`);
  }
};
 

const uploadToCloud = async (localfilePath) => {
  try {
    const compressedFilePath = localfilePath.replace(/(\.\w+)$/, '_compressed$1');

    await sharp(localfilePath)
      .resize({ width: 800 })
      .toFile(compressedFilePath);

    console.log("Image compressed to:", compressedFilePath);

    const absolutePath = path.resolve(compressedFilePath);
    const response = await cloudinary.uploader.upload(absolutePath, {
      resource_type: "auto",
    });

    console.log("Uploaded to Cloudinary:", response.secure_url);

    await fs.unlink(localfilePath); 
console.log(response);
    return response.secure_url;
  } catch (error) {
    console.error("Error uploading compressed image:", error);
    await fs.unlink(localfilePath).catch(() => {});
    return null;
  }
};

export {uploadToCloud}