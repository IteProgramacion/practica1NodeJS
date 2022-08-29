const express = require('express')
const cors = require("cors");

class ServerModels {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.userPath = '/api/user'
        //Middlewares
        this.middleware();
        //Rutas de mi aplicacion
        this.routes();
    }

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