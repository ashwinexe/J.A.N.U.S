const fs = require("fs");
const {createConnection, EntitySchema} = require('typeorm');

const config = {
    type: 'cockroachdb',
    synchronize: true,
    username: process.env.DBUSER,
    password: process.env.DBPASSWORD,
    host: process.env.DBHOST,
    database: process.env.DBNAME,
    port: 26257,
    ssl: {
        ca: fs.readFileSync(__dirname+'/certs/ca.crt')
            .toString()
    },
    // logging: true,
    // logger: 'simple-console',
    entities: [new EntitySchema(require('./schema.json'))]
};
const connection = createConnection(config);

module.exports = connection;