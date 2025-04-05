import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getShoopingById } from "../axios/shoppigAxios";
import { loadShopping } from "../redux/shopeAction";

export const PersonalArea = () => {
    const listShopping = useSelector(state => state.ShoppingReducer.listShopping);
    const user = useSelector(state => state.UserReducer.currentUser);
    const dispatch = useDispatch();
    const [expandedOrderIds, setExpandedOrderIds] = useState([]);

    useEffect(() => {
        if (user?._id) {
            getShoopingById(user._id).then(res => dispatch(loadShopping(res.data))).catch(console.log);
        }
    }, [user, dispatch]);

    const toggleOrderDetails = id => setExpandedOrderIds(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);

    return (
        <div className="container mt-5" style={{ padding: "20px", backgroundColor: "#ffffff", borderRadius: "12px", boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1), 0 0 10px rgba(0, 123, 255, 0.5)" }}>
            <h2 className="text-center mb-4" style={{ color: '#ffab40', fontFamily: 'Arial, sans-serif' }}>🛍️ Your Shopping</h2>
            {listShopping.length === 0 ? (
                <div className="text-center" style={{ color: '#ffab40', fontWeight: 'bold' }}>
                    <p>There are no purchases in your history</p>
                </div>
            ) : (
                <table className="table table-hover table-striped">
                    <thead>
                        <tr>
                            <th>Date of Purchase</th>
                            <th>Total Amount</th>
                            <th className="text-center" colSpan="2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listShopping.map(order => (
                            <React.Fragment key={order._id}>
                                <tr className="table-light">
                                    <td>{order.dateBuy}</td>
                                    <td>₪{order.totalSum}</td>
                                    <td>
                                        <button className="btn" style={{ backgroundColor: '#ffab40', color: 'white' }} onClick={() => toggleOrderDetails(order._id)}>
                                            {expandedOrderIds.includes(order._id) ? "Hide Details" : "More Details"} 📋
                                        </button>
                                    </td>
                                </tr>
                                {expandedOrderIds.includes(order._id) && (
                                    <tr>
                                        <td colSpan="4">
                                            <p style={{ color: '#ffab40', fontWeight: 'bold' }}>Code: {order._id}</p>
                                            <div className="d-flex flex-wrap">
                                                {order.cart.map((product, i) => (
                                                    <div key={i} className="m-2 p-3 border rounded" style={{ borderColor: '#ffab40', boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)" }}>
                                                        <p className="mb-1" style={{ color: '#ffab40', fontWeight: 'bold' }}><strong>Name:</strong> {product.name}</p>
                                                        <p className="mb-1"><strong>Price:</strong> ₪{product.price}</p>
                                                        <p className="mb-1"><strong>Quantity:</strong> {product.quantity}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </td>
                                    </tr>
                                )}
                            </React.Fragment>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};