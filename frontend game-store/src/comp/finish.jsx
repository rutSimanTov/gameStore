import { useSelector } from "react-redux";


export const EndShopping = () => {
    let myCart = useSelector(x => x.CartReducer.cart);
    let totalSum = useSelector(x => x.CartReducer.totalSum);
 
    return (
        <div className="container mt-5" style={{
            padding: "20px",
            backgroundColor: "#ffffff",
            borderRadius: "12px",
        }}>
            <h2 className="text-center mb-4" style={{ color: '#ffab40', fontFamily: 'Arial, sans-serif' }}>🛒 Thank You for Shopping With Us!</h2>
            <table className="table table-hover table-striped">
                <thead>
                    <tr>
                        <th scope="col" >Product Name</th>
                        <th scope="col" >Price</th>
                        <th scope="col" >Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {myCart.map((p, i) => (
                        <tr key={i} className="table-light">
                            <td>{p.name}</td>
                            <td>₪{p.price}</td>
                            <td>{p.quantity}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="text-center">
                <p style={{ fontWeight: 'bold', fontSize: '1.5em', color: '#1E90FF' }}>Total Amount: ₪{totalSum}</p>
            </div>
        </div>
    );
}