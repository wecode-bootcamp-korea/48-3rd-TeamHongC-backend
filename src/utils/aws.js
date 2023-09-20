const { S3Client } = require('@aws-sdk/client-s3');
const multer = require('multer');
const multerS3 = require('multer-s3');
const { v4: uuid } = require('uuid');
const mime = require('mime-types');

const s3 = new S3Client({
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY,
        secretAccessKey: process.env.AWS_SECRET_KEY,
    },
    region: process.env.AWS_REGION
});

const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: 'hongc',
        acl: 'public-read',
        metadata: function (req, file, cb) {
            cb(null, { fieldName: file.fieldname });
        },
        key: function (req, file, cb) {
            const extension = mime.extension(file.mimetype);
            const filename = `${uuid()}.${extension}`;
            cb(null, filename);
        },
    }),
});

module.exports = { upload };