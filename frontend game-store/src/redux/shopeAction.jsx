//---category
export const loadCategory = (catData) => {
    return { type: "LOAD_CATEGORY", payload: catData }
}
//---user
export const isManager = (value) => {
    return { type: "IS_MANAGER", payload: value }
}

export const setCurrentUser = (item) => {
    return { type: "SET_USER", payload:item }
}
//--game
export const loadGame = (gameData) => {
    return { type: "LOAD_GAME", payload: gameData }
}
//----cart
export const addToCart = (item) => {
    return { type: "ADD_TO_CART", payload: item };
}

export const reduceFromCart = (id) => {
    return { type: "REDUCE_FROM_CART", payload: id };
}

//---personal area
export const loadShopping = (sp) => {
    return { type: "LOAD_SHOPPING", payload: sp }
}
