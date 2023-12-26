const Pool = require('pg').Pool;


const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: '1111',
    port: 7461,
    database: 'donremolo'
});

module.exports = pool;