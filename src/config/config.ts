import dotenv from 'dotenv';
import Configuration from '../interfaces/config.interfaces';

dotenv.config();

const ENV = process.env.NODE_ENV || 'development';

const CONFIG: Configuration = {
    development: {
        app: {
            PORT: process.env.PORT || 8081
        },
        db: {
            uri: 
                process.env.MONGO_URI_DEV ||
                'mongodb://localhost:27017/test_development'
        },
        auth0: {
            client_origin: process.env.APP_ORIGIN,
            audience: process.env.AUTH0_AUDIENCE,
            issuer: process.env.AUTH0_ISSUER
        },
        cloudinary: {
          cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
          api_key: process.env.CLOUDINARY_API_KEY,
          api_secret: process.env.CLOUDINARY_API_SECRET
        }
    },
    production: {
        app: {
            PORT: process.env.PORT || 8082
        },
        db: {
            uri: 
                process.env.MONGO_URI_DEV ||
                'mongodb://localhost:27017/test_production'
        },
        auth0: {
            client_origin: process.env.APP_ORIGIN,
            audience: process.env.AUTH0_AUDIENCE,
            issuer: process.env.AUTH0_ISSUER
        },
        cloudinary: {
          cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
          api_key: process.env.CLOUDINARY_API_KEY,
          api_secret: process.env.CLOUDINARY_API_SECRET
        }
    },
}

export default CONFIG[ENV]