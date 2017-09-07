import db from '../../db';
import Sequelize from 'sequelize';


const User = db.define('User', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    username: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
    },
    password: {
        type: Sequelize.STRING,
    },
});

User.sync().then(async () => {
   const count = await User.count();
   if (count <= 0)
       User.create({
           username: 'admin',
           email: 'admin@admin.com',
           password: 'admin'
       }).then(() => console.info('Created admin user !'))
});

export default User;