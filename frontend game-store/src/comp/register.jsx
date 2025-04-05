import { useState } from "react";
import { addUser, checkUser } from "../axios/userAxios";
import { setCurrentUser } from "../redux/shopeAction";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

export const Register = () => {
    let navigate = useNavigate();
    let dispatch = useDispatch();
    const [user, setUser] = useState({ name: "", password: "", creditCard: "" });
    const [nameError, setNameError] = useState(false)

    const clickRegister = async (name, password) => {
        if (name == "")
            setNameError(true)
        else
            setNameError(false)
        try {
            const x = await checkUser(name, password);
            if (x.data === false) {
                const u = await addUser(user);
                dispatch(setCurrentUser(u.data));
                alert("נרשמת בהצלחה");
                navigate("../PersonalArea");
            } else {
                alert("המשתמש קיים במערכת");
                navigate("../PersonalArea");
            }
        }
        catch (err) { console.log("error in: ", err); }
    };

    return (
        <div className="container mt-5" style={{ padding: "20px", backgroundColor: "#ffffff", borderRadius: "12px", boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)" }}>
            <h2 className="text-center mb-4" style={{ color: '#ffab40', fontFamily: 'Arial, sans-serif' }}>📝 Register</h2>
            <input
                className="form-control mb-3"
                placeholder="Name"
                onBlur={(e) => setUser(user => ({ ...user, name: e.target.value }))}
                style={{ borderColor: "#ADD8E6", borderWidth: "2px" }}
            />
            {nameError && <p className="text-danger">*Reuire</p>}
            <input
                type="password"
                className="form-control mb-3"
                placeholder="Password"
                onBlur={(e) => setUser(user => ({ ...user, password: e.target.value }))}
                style={{ borderColor: "#ADD8E6", borderWidth: "2px" }} 
            />
            <p className="text-danger" style={{ display: user.password ? (/^.{9,}$/.test(user.password) ? 'none' : "block") : 'none' }}>*Less than 9 characters</p>

            <input
                className="form-control mb-4"
                placeholder="Credit Card"
                onBlur={(e) => setUser(user => ({ ...user, creditCard: e.target.value }))}
                style={{ borderColor: "#ADD8E6", borderWidth: "2px" }}
            />
            <p className="text-danger" style={{ display: user.creditCard && !/^\d{16}$/.test(user.creditCard) ? 'block' : 'none' }}>*Must contain 16 digits</p>
            <div className="text-center">
                <button className="btn" style={{ backgroundColor: "#007bff", color: "white" }} onClick={() => clickRegister(user.name, user.password)}>Register</button>
            </div>
        </div>
    );
}