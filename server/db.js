import Sequelize from 'sequelize';
import colors from 'colors';
import { resolve } from 'path';

const dev = !(process.env.NODE_ENV === 'production');

let options = {
    dialect: 'sqlite',
    storage: resolve(__dirname, '..', 'database.sqlite')
};

if (!dev)
    options = {
        dialect: process.env.DB_CONNECTION,
        host: process.env.DB_HOST,
        database: process.env.DB_PORT,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
    };

const db = new Sequelize(options);

export const connect = () => {
    db
    .authenticate()
    .then(() => {
        console.log(colors.green('Connection has been established successfully.'));
    })
    .catch(err => {
        console.error(colors.red('Unable to connect to the database:', err));
        process.exit(1);
    });
};

export default db;