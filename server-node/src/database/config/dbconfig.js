require("dotenv").config();
module.exports = {
    dialect: "mysql",
    host: process.env.DB_SERVER,
    port: process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    timezone: "-03:00",
    define: {
        timestamp: true,
    },
    dialectOptions: {
        supportBigNumbers: true,
        bigNumberStrings: true
    }
};