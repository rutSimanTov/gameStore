import { produce } from 'immer'

export const InitialState = {
    listCategory: []
 
}
export const CategoryReducer = produce((state, action) => {
    switch (action.type) {
        case "LOAD_CATEGORY": { state.listCategory = action.payload }
     
        
        default:
            return state; // הכנס במידה ומקרה לא תואם
    }
}, InitialState)