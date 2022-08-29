import {Sequelize} from "sequelize";

const db = new Sequelize('db_node', 'root','', {
    host: 'localhost',
    dialect: 'mysql',
    //loging: false
});

export default db;
