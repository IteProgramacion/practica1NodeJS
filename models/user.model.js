const {DataTypes} = require('sequelize');
const sequelize = require("../db/connectionDB");

const User = sequelize.define('User',{

    // id:{
    //     type: DataTypes.INTEGER,
    //     autoIncrement: true,
    //     primaryKey: true
    //
    // },

    name:{
        type: DataTypes.STRING,

    },

    email:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            isEmail:true,
        }
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