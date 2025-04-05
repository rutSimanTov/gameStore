import bodyParser from "body-parser";
import { Router } from "express";
import shoppingController from "../controllers/shoppingController.js"

const sh=Router()
sh.use(bodyParser.json())

sh.post('/',shoppingController.add)
sh.get('/:idCustomer',shoppingController.getById)

export default sh