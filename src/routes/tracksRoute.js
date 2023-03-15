import { Router } from "express";
import { getAll, getById, getByName } from "../controller/tracks.controller.js";



const trackRouter = Router();


trackRouter.route('/')
    .get(getAll)

trackRouter.route('/:id')
    .get(getById)

trackRouter.route('/track/:title')
    .get(getByName)



export default trackRouter;