const {Pool} = require("pg");

const databaseConnection = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    }
})
databaseConnection.connect();

export default databaseConnection;