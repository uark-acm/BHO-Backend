import * as dotenv from 'dotenv';
import { Pool } from 'pg'

dotenv.config()

const databaseConnection = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    }
})
databaseConnection.connect();

export default databaseConnection;