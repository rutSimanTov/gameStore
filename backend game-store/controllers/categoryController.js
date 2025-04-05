import categorySchema from "../schema/categorySchema.js";

export default {
    getAll: (req, res) => {
        categorySchema.find()
            .then((list) => {
                res.status(200).send(list)
            })
            .catch((err) => {
                res.status(404).send(err.message)
            })
    },
    add: (req, res) => {
        const newCategory = new categorySchema(req.body)
        newCategory.save()

            .then((newCategory) => {
                res.status(200).send(newCategory)
            })
            .catch((err) => {
                res.status(404).send(err.message)
            })

    },
    update: (req, res) => {
        categorySchema.findByIdAndUpdate(req.params.id, req.body, { new: true })
            .then((c) => {
                res.status(200).send(c)
            })
            .catch((err) => {
                res.status(404).send(err.message)
            })
    },
    delete: (req, res) => {
        categorySchema.findByIdAndDelete(req.params.id)
            .then(() => res.status(200).send(true))
            .catch(() => res.status(404).send(false))
    }
}