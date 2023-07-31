import s3 from '../loaders/s3';
import { PutObjectRequest } from 'aws-sdk/clients/s3';

const bucketName = 'bho-images-bucket';

//typescript function to upload an image to s3 bucket
export const uploadImage = async (file: File) => {
    const params: PutObjectRequest = {
        Bucket: bucketName,
        Key: `${Date.now().toString()}.${file.type.replace('image/', '')}`,
        Body: Buffer.from(await file.arrayBuffer()),
        ContentType: file.type,
    };
    return (await s3.upload(params).promise()).Key;
};
