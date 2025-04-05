import axios from "axios"
import { useSelector } from "react-redux"


const url = "http://localhost:8080/shopping"

export const getShoopingById = (uid) => {
    return axios.get(`${url}/${uid}`)
}

export const  useSetOrder = () => {
    let idCustomer=useSelector(x=>x.UserReducer.currentUser._id)
    let totalSum = useSelector (x => x.CartReducer.totalSum)
    let myCart = useSelector(x => x.CartReducer.cart)

    const setOrder = () => {
    let obj = {idCustomer:idCustomer,dateBuy:Date(),totalSum:totalSum,cart:myCart}
    return axios.post(`${url}/`, obj)
    
}
return setOrder
;}

