const {Sequelize} = require('sequelize')

const db = new Sequelize('db_node', 'root','', {
    host: 'localhost',
    dialect: 'mysql',
    //loging: false
});

module.exports ={
    db
}

