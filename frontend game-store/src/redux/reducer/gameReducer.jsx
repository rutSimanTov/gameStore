import { produce } from 'immer'

export const InitialState = {

    listGame: [],

}
export const GameReducer = produce((state, action) => {
    switch (action.type) {

        case "LOAD_GAME": { state.listGame = action.payload }
        
        default:
            return state; 
    }
}, InitialState)


