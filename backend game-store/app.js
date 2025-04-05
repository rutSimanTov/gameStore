import express from 'express'
import mongoose from 'mongoose'
import cat from './routes/categoryRoute.js';
import gr from './routes/gameRoute.js'
import cors from 'cors'
import customer from './routes/customerRoute.js';
import sh from './routes/shoppingRoute.js';

const app = express()
app.listen("8080", () => {
    console.log("runnnn");

})
app.use(express.json());
//חיבור בין השרת-נוד ללקוח-ריאקט
app.use(cors())
//תקיית התמונות כעת גלובלית
app.use(express.static('images'))

app.use('/category', cat)
app.use('/game', gr)
app.use('/customer',customer)
app.use('/shopping',sh)


//connect the server to the database
mongoose.connect('mongodb://0.0.0.0:27017/game_shop')
    .then(() => {
        console.log("connect mongo");
    })
    .catch((err) => {
        console.log(err.massege);
    })
