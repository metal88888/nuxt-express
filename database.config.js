const { resolve } = require('path');

module.exports = {
    development: {
        dialect: 'sqlite',
        storage: resolve(__dirname, 'data', 'db.sqlite'),
    },
    production: {
        host: '127.0.0.1',
        port: 5432,
        database: '',
        dialect: 'postgres',
        username: 'root',
        password: 'root'
    }
}