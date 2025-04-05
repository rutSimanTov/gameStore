import {combineReducers, createStore} from 'redux'; 

import { GameReducer } from "./reducer/gameReducer";
import { CategoryReducer } from "./reducer/categoryReducer";
import { CartReducer } from "./reducer/cartReducer";
import { UserReducer } from "./reducer/userReducer";
import { ShoppingReducer } from './reducer/shoppingReducer';

const reducer=combineReducers({GameReducer,CategoryReducer,CartReducer,UserReducer,ShoppingReducer});
export const store=createStore(reducer)
window.store=store



