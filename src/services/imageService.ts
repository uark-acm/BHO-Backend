import s3 from '../loaders/s3';

const bucketName = 'bho-image-bucket';

export const getImage = async (url: string) => {
    const params = {
        Bucket: bucketName,
        Key: url,
    };
    return await s3.getObject(params);
};
