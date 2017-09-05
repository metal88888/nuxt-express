import db from '../../db';
import Sequelize from 'sequelize';

const User = db.define('user', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: Sequelize.STRING,
        required: true,
    },
    password: {
        type: Sequelize.STRING,
    },
    email: {
        type: Sequelize.STRING,
        required: true,
    }
});


User.sync({ force: true }).then(() => {
    User.count().then(count => {
        if (count <= 0) {
            User.create({
                username: 'admin',
                email: 'admin@admin.com',
                password: '123',
            });
        }
    })

});

export default User;