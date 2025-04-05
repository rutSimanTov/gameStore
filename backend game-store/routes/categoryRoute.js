import { Router } from "express";
import categoryController from "../controllers/categoryController.js";
import bodyParser from "body-parser";

const cat = Router();
cat.use(bodyParser.json())

cat.get('/', categoryController.getAll);
cat.post('/', categoryController.add);
cat.put('/:id', categoryController.update);
cat.delete('/:id', categoryController.delete);


export default cat;