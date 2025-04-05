import { produce } from 'immer'

export const InitialState = {
isManager: false,
currentUser:{name:"",pass:""}
}

export const UserReducer = produce((state, action) => {
    switch (action.type) {

case "IS_MANAGER": { state.isManager = action.payload }
case "SET_USER": { state.currentUser = action.payload }


  }
}, InitialState)



