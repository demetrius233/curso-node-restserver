require("dotenv").config()
const express = require("express")
const cors = require('cors');




class Server {
    constructor() {
        this.app = express()
        this.PORT = process.env.PORT || 4000
        this.usuariosPath = "/api/usuarios"

        
        // Middlewares
        this.middlewares()

        // Rutas de mi aplicación
        this.routes()
    }


    middlewares(){

        // Activar express.json
        this.app.use(express.json())

        // CORS
        this.app.use(cors())

        // Directorio público
        this.app.use(express.static("public"))
    }

    routes(){
        
        this.app.use(this.usuariosPath, require("../routes/usuarios"))
    }

    listen(){
        this.app.listen(this.PORT, ()=>{
            console.log(`app corriendo en el puerto ${this.PORT}`);
        })
    }
}

module.exports = Server