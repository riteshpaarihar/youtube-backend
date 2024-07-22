import { v2 as cloudinary } from 'cloudinary';

import fs from 'fs';


// Configuration
cloudinary.config({
    cloud_name: 'dexfdwvgf',
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});




// Upload an image
const uploadOncloudinary = async(localFilePath) => {
    try {
        if (!localFilePath) return null;
        const response = await cloudinary.uploader.upload(localFilePath, { resource_type: "auto" })
            //  console.log("Upload successfully uploaded", response.url)
        fs.unlinkSync(localFilePath);
        return response;
    } catch (error) {
        fs.unlinkSync(localFilePath);
        return null;
    }
}


export { uploadOncloudinary }