import express from 'express'
import dotenv from 'dotenv'
import './database/ModelConnection.js'
import homeRoutes from './routers/home.routes.js'
import usuarioRoutes from './routers/usuario.routes.js'

dotenv.config()

class App {
    constructor() {
        this.app = express()
        this.middlawares()
        this.routes()
    }

    middlawares() {
        this.app.use(express.json());
        this.app.use(express.urlencoded({
            extend: true
        }));

    }

    routes() {
        this.app.use('/', homeRoutes)
        this.app.use('/usuario', usuarioRoutes)
    }
}

export default new App().app