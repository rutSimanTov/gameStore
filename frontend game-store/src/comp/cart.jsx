import { useDispatch, useSelector } from "react-redux"
import { addToCart, reduceFromCart } from "../redux/shopeAction"
import { useNavigate } from "react-router-dom"
import { useSetOrder } from "../axios/shoppigAxios"

export const Cart = () => {

    let myCart = useSelector(x => x.CartReducer.cart)
    let totalSum = useSelector(x => x.CartReducer.totalSum)
    let currentUser = useSelector(x => x.UserReducer.currentUser)
    let myd = useDispatch()
    let navigate = useNavigate()
    const setOrder = useSetOrder();

    const f = () => {
        if (currentUser.name === "") {
            alert("You are not logged in")
            navigate("../login")
        } else {
            navigate("../EndShopping")
            setOrder()
        }
    }

    return (
        <div className="container mt-5" style={{ backgroundColor: "#e6f7ff", borderRadius: "10px", padding: "20px" }}>
            <h2 className="text-center mb-4 text-primary"> Your Shopping Cart</h2>
            {myCart.length === 0 ? (
                <p className="text-center">There are no products in your shopping cart </p>
            ) : (
                myCart.map((p, i) => (
                    <div key={i} className="card mb-3" style={{ border: "2px solid #ff9900" }}>
                        <div className="card-body">
                            <h5 className="card-title" style={{ color: "#ff9900" }}>{p.name} </h5>
                            <img src={`http://localhost:8080/${p.img}`} alt={p.name} className="img-fluid" style={{ maxWidth: "100px" }} />
                            <p className="card-text">Product Code: {p._id} </p>
                            <p className="card-text">Category Code: {p.categoryCode} </p>
                            <p className="card-text">Price: ₪{p.price} </p>
                            <p className="card-text">Quantity: {p.quantity} </p>
                            <button className="btn btn-primary" onClick={() => myd(reduceFromCart(p))}>-</button>
                            <button className="btn btn-warning" onClick={() => myd(addToCart(p))}>+</button>
                        </div>
                    </div>
                ))
            )}
            <div className="text-center">
                <button className="btn" style={{ backgroundColor: "#ff9900", color: "white" }}
                    onClick={() => f()}>Complete Purchase </button>
                <p style={{ fontWeight: 'bold', fontSize: '1.2em', color: '#ff9900' }}>Total Amount: ₪{totalSum} 💵</p> {/* Styled total amount with emoji */}
            </div>
        </div>
    )
}