import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export const Nav = () => {
    let isM = useSelector(x => x.UserReducer.isManager);
    let currentUser = useSelector(x => x.UserReducer.currentUser);

    return (
        <nav className="navbar navbar-expand-sm" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}>
            <div className="container-fluid" style={{ justifyContent: "center", width: "100vw" }}>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="" style={{ color: '#007BFF', fontWeight: 'bold' }}>Home Page</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="register" style={{ color: '#007BFF', fontWeight: 'bold' }}>Register</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="login" style={{ color: '#007BFF', fontWeight: 'bold' }}>Login</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="cart" style={{ color: '#007BFF', fontWeight: 'bold' }}>Cart</NavLink>
                    </li>
                    {currentUser.name !== "" && (
                        <li className="nav-item">
                            <NavLink className="nav-link" to="PersonalArea" style={{ color: '#007BFF', fontWeight: 'bold' }}>Personal Area</NavLink>
                        </li>
                    )}
                    {isM && (
                        <li className="nav-item">
                            <NavLink className="nav-link" to="games" style={{ color: '#007BFF', fontWeight: 'bold' }}>Games</NavLink>
                        </li>
                    )}
                    {isM && (
                        <li className="nav-item">
                            <NavLink className="nav-link" to="categories" style={{ color: '#007BFF', fontWeight: 'bold' }}>Categories</NavLink>
                        </li>
                    )}
                </ul>
            </div>
        </nav>
    );
};
