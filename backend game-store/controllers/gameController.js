import gameSchema from "../schema/gamesSchema.js"
export default {
    getAll: (req, res) => {
        gameSchema.find()
            .then((g) => {
                res.status(200).send(g)
            })
            .catch((err) => {
                res.status(404).send(err.message)
            })
    },
    getById: (req, res) => {
        //מחזיר גם את כל הנתונים של הקטגוריה
        gameSchema.findById(req.params.id).populate('categoryCode')
            .then((g) => {
                res.status(200).send(g)
            })
            .catch((err) => {
                res.status(404).send(err.message)
            })
    },

    getByCategory: (req, res) => {
        gameSchema.find({ categoryCode: req.params.cid })
            .then((g) => {
                res.status(200).send(g)
            })
            .catch((err) => {
                res.status(404).send(err.message)
            })
    },
    add: (req, res) => {
        const g = new gameSchema(req.body)
        g.save()
            .then((g) => {
                res.status(200).send(g)
            })
            .catch((err) => {
                res.status(404).send(err.message)
            })
    },
    update: (req, res) => {
        gameSchema.findByIdAndUpdate(req.params.id, req.body, { new: true })
            .then((g) => {
                res.status(200).send(g)
            })
            .catch((err) => {
                res.status(404).send(err.message)
            })
    },
    remove: (req, res) => {
        gameSchema.findByIdAndDelete(req.params.id)
            .then(() => res.status(200).send(true))
            .catch(() => res.status(404).send(false))
    }
    //get customer by name and password
    // getByNameAndPrice: (req, res) => {
    //     gameSchema.findOne({ name: req.params.name, price: req.params.price })
    //         .then((g) => {
    //             if (g)
    //                 res.status(200).send(g)
    //             else
    //                 res.status(200).send(false)
    //         })
    //         .catch((err) => {
    //             res.status(404).send(err.message)
    //         })
    // }

}