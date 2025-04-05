import { produce } from 'immer'

export const InitialState = {

    listShopping: [],

}
export const ShoppingReducer = produce((state, action) => {
    switch (action.type) {

        case "LOAD_SHOPPING": { state.listShopping = action.payload }
       
        default:
            return state; 
    }
}, InitialState)
