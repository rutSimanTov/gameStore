import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkUser } from "../axios/userAxios";
import { isManager, setCurrentUser } from "../redux/shopeAction";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    let dispatch = useDispatch();
    let navigate = useNavigate();
    let currentu = useSelector(x => x.UserReducer.currentUser);

    const [user, setUser] = useState({ name: "", pass: "" });
    const [nameError, setNameError] = useState(false)


    const clickLogin = async (name, pass) => {
        if (name == "")
            setNameError(true)
        else
            setNameError(false)
        try {
            if (name === currentu.name && pass === currentu.password)
                navigate("../PersonalArea");
            else {
                const x = await checkUser(name, pass);
                if (x.data !== false) {
                    if (name == "manager" && pass == 1)
                        dispatch(isManager(true));
                    else {
                        dispatch(isManager(false));
                        dispatch(setCurrentUser(x.data));
                        navigate("../PersonalArea");
                    }
                }
                else if (x.data === false) {
                    alert("User not registered, please register.");
                    navigate("../register");
                }
                else
                    alert("Login failed or no data returned.");

            }
        } catch (err) { console.log("error in: ", err); }
    };

    return (
        <div className="container mt-5" style={{ backgroundColor: "white", borderRadius: "10px", padding: "20px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
            <h2 className="text-center mb-4" style={{ color: '#ffab40', fontFamily: 'Arial, sans-serif' }}>🔒 Login</h2>
            <input
                className="form-control mb-3"
                placeholder="Name"
                onBlur={(e) => setUser(prev => ({ ...prev, name: e.target.value }))}
                style={{ borderColor: "#ADD8E6", borderWidth: "2px" }}
            />

            {nameError && <p className="text-danger">*Require</p>}
            <input
                type="password"
                className="form-control mb-3"
                placeholder="Password"
                onBlur={(e) => setUser(prev => ({ ...prev, pass: e.target.value }))}
                style={{ borderColor: "#ADD8E6", borderWidth: "2px" }}
            />
            <p className="text-danger" style={{ display: user.pass ? (/^.{9,}$/.test(user.pass) ? 'none' : "block") : 'none' }}>*Less than 9 characters</p>
            <div className="text-center">
                <button className="btn" style={{ backgroundColor: "#007bff", color: "white" }}
                    onClick={() => clickLogin(user.name, user.pass)}>Login</button>
            </div>
        </div>
    );
};
