import Sequelize from 'sequelize';
import dbConfig from '../../database.config';

const dbOptions = process.env.NODE_ENV === 'production' ?
    dbConfig.production : dbConfig.development;

export default new Sequelize(dbOptions);