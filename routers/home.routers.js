import {Router} from "express";
// import homeController from '../controller/home.controller.js';

const routerHome = new Router()

routerHome.get("/", homeController.index)

export default routerHome;