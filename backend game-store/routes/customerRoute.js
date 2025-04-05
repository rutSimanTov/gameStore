import bodyParser from "body-parser";
import {  Router } from "express";
import customerController from '../controllers/customerController.js'

const customer=Router()
customer.use(bodyParser.json())

customer.post('/',customerController.add)
customer.get('/:name/:password',customerController.getByNameAndPass)

export default customer;