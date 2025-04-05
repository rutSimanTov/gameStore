import { model, Schema } from "mongoose";

const customer = Schema({
  name: String,
  password: String,
  creditCard: String

}, { versionKey: false })

export default model("customer", customer)