import customerSchema from '../schema/customerSchema.js'

export default {
    add: (req, res) => {
        const newCustomer = new customerSchema(req.body)
        newCustomer.save()
            .then((newCustomer) => {
                res.status(200).send(newCustomer)
            })
            .catch((err) => {
                res.status(404).send(err.message)
            })
    },
    getByNameAndPass: (req, res) => {
        customerSchema.findOne({ name: req.params.name, password: req.params.password })
            .then((c) => {
                if (c)
                    res.status(200).send(c)
                else
                    res.status(200).send(false)
            })
            .catch((err) => {
                res.status(404).send(err.message)
            })
    }
}