import mongoose, { model, Schema } from "mongoose";

const shopping = Schema({
    idCustomer: { type: mongoose.Types.ObjectId, ref: 'customer' },

    dateBuy: { type: Date, default: Date() },

    totalSum: { type: Number, default: 0 },

    cart: []

},
    { versionKey: false })


// shopping.methods.calculateTotalSum = function() {
//     this.totalSum1 = this.cart.reduce((sum, item) => {
//         return sum + (item.amount * item.Price);
//     }, 0);
// };


export default model("shopping", shopping)