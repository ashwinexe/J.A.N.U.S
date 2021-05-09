const fs = require("fs");
const { Pool } = require("pg");

const config = {
    user: process.env.DBUSER,
    password: process.env.DBPASSWORD,
    host: process.env.DBHOST,
    database: process.env.DBNAME,
    port: 26257,
    ssl: {
        ca: fs.readFileSync(__dirname+'/certs/ca.crt')
            .toString()
    }
};

module.exports = new Pool(config);