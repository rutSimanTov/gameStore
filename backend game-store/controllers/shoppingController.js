import shoppingSchema from "../schema/shoppingSchema.js";

export default {
    add: (req, res) => {
        const newShopping = new shoppingSchema(req.body)
        newShopping.save()
            .then((s) => {
                res.status(200).send(s)
            })
            .catch((err) => {
                res.status(404).send(err.message)
            })
    },
    getById:(req,res)=>{
        shoppingSchema.find({ idCustomer:req.params.idCustomer})
        .then((s)=>{
            res.status(200).send(s)
        })
        .catch((err) => {
            res.status(404).send(err.message)
        })
    }
}