import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.join(process.cwd(), '/.env') });

const envData = {
    // NODE_ENV: process.env.NODE_ENV,
    PORT: process.env.PORT,
    MONGO_URI: process.env.DATABASE_URL,
    // JWT_SECRET: process.env.JWT_SECRET,
}

export default envData;