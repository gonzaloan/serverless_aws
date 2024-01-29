const imageSize = require('image-size');
const Jimp = require('jimp');
const AWS = require('aws-sdk');

AWS.config.update({ region: 'us-east-1' });
const s3 = new AWS.S3();


exports.handler = async (event) => {
    //It can contain multiple files
    let filesProcessed = event.Records.map( async (record) => {
        const bucket = record.s3.bucket.name;
        const filename = record.s3.object.key;

        try{
        //get File from S3
        const imageObject = await s3.getObject({ Bucket: bucket, Key: filename }).promise();
        const imageBuffer = imageObject.Body;
        // Resize File
        const resizedImageBuffer = await resizeImageSharp(imageBuffer);
        
        //Read the resised File
        const newKey = 'resized_' + filename;
        const newBucket = bucket + '-resized'
        //Upload the new file to S3
        await s3.putObject({ Bucket: newBucket, Key: newKey, Body: resizedImageBuffer }).promise();
        
        console.log(`resized and stored as ${newKey}`);
        }catch(error){
            console.error('Error:', error);
        }
    });

    await Promise.all(filesProcessed);
    console.log("done");
    return "done";
};

async function resizeImageSharp(imageBuffer) {
    const jimpImage = await Jimp.read(imageBuffer);
    
    // Resize File
    jimpImage.resize(150, 150);

    // Convert to buffer
    const resizedImageBuffer = await jimpImage.getBufferAsync(Jimp.MIME_JPEG);

    return resizedImageBuffer;
}
