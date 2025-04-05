import { Route, Routes } from "react-router-dom"
import { HomePage } from "./homePage"
import { Login } from "./login"
import { Cart } from "./cart"
import { Register } from "./register"
import { Game } from "./game"
import { Category } from "./category"
import { PersonalArea } from "./personalArea"
import { EndShopping } from "./finish"

export const Routing=()=>{
    return<Routes>
        <Route path="/" element={<HomePage></HomePage>} ></Route>
        <Route path="register" element={<Register></Register>}></Route>
        <Route path="login" element={<Login></Login>}></Route>
        <Route path="cart" element={<Cart></Cart>}></Route>
        <Route path="PersonalArea" element={<PersonalArea></PersonalArea>}></Route>
        <Route path="games" element={<Game></Game>}></Route>
        <Route path="categories" element={<Category></Category>}></Route>
        <Route path="EndShopping" element={<EndShopping></EndShopping>}></Route>
    </Routes>
}