const {DataTypes} = require('sequelize');
const sequelize = require("../db/connectionDB");

const User = sequelize.define('User', {

    uid: {
        type: DataTypes.STRING
    },
    name: {
        type: DataTypes.STRING,
        defaults: 'Anonimo'
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true,
        }
    },

    emailVerifies: {
        type: DataTypes.BOOLEAN,
        defaults: false
    },

    creationTime: {
        type: DataTypes.STRING,
    },
    lastSignInTime: {
        type: DataTypes.STRING
    },
    phoneNumber: {
        type:DataTypes.STRING,
        allowNull: true
    },
    ProviderId: {
        type: DataTypes.STRING,
    },
    refreshToken:{
        type: DataTypes.STRING
    }

});

(async () => {
    try {
        await sequelize.sync();

        console.log('Conexxion establecida con exito')
    } catch (error){
        console.log(error);
        throw new Error('Error al iniciar la base de datos')
    }
    //Code here
})();

module.exports = User;