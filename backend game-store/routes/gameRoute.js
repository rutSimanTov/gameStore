import { Router } from "express";
import gameController from "../controllers/gameController.js";
import bodyParser from "body-parser";
const gr=Router()
gr.use(bodyParser.json())

gr.get('/byCategory/:cid',gameController.getByCategory)
gr.get('/all',gameController.getAll)
gr.get('/byId',gameController.getById)
gr.post('/',gameController.add)
gr.put('/:id',gameController.update)
gr.delete('/:id',gameController.remove)
//gr.get('/:name/:price',gameController.getByNameAndPrice)

export default gr