import * as AWS from 'aws-sdk';
// Set the region
AWS.config.update({ region: 'us-east-2' });

// Create S3 service object
const s3 = new AWS.S3({ apiVersion: '2006-03-01' });

export default s3;
