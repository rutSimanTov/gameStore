import { produce } from 'immer'

export const InitialState = {
    cart: [],
    totalSum: 0

}
export const CartReducer = produce((state, action) => {
    switch (action.type) {
        case "ADD_TO_CART": {
            const pIndex = state.cart.findIndex(x => x._id === action.payload._id)

            if (pIndex !== -1)
                state.cart[pIndex].quantity += 1
            else
                state.cart.push({ ...action.payload, quantity: 1 });
            state.totalSum += action.payload.price
            break;
        }
        case "REDUCE_FROM_CART": {
            const pIndex = state.cart.findIndex(x => x._id === action.payload._id)
            if (pIndex !== -1) {
                if (state.cart[pIndex].quantity === 1)
                    state.cart.splice(pIndex, 1);
                else
                    state.cart[pIndex].quantity -= 1
                state.totalSum -= action.payload.price
            }
        }
       
        default:
            return state; // הכנס במידה ומקרה לא תואם
    }
}, InitialState)


