"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { Pool } = require("pg");
const databaseConnection = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});
databaseConnection.connect();
exports.default = databaseConnection;
//# sourceMappingURL=postgres.js.map