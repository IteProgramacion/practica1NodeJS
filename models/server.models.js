const express = require('express')
const cors = require("cors");
const connection = require("../db/connectionDB");

class ServerModels {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.userPath = '/api/user'
        //Metodos iniciales
        this.dbConnection();
        this.middleware();

        this.routes();
    }

    dbConnection = async () => {
        try {
            await connection.db.authenticate();
            console.log('Conexxion establecida con exito')
        } catch (error){
            console.log(error);
            throw new Error('Error al iniciar la base de datos')
        }



    };


    middleware() {
        //CORS
        this.app.use(cors());

        //lectura y parseo del body
        this.app.use(express.json());

        //Directorio
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use(this.userPath, require('../routes/user.route'));

    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en npuerto', process.env.PORT);
        })
    }
}

module.exports = ServerModels;