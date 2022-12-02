import React from "react";
import { FaSignInAlt, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
function Headers() {
    return (
        <header className="header">
            <div className="logo">
                <Link to="/">my data</Link>
                <ul>
                    <li>
                        <Link to="/login">
                            <FaSignInAlt />
                            Login
                        </Link>
                    </li>
                    <li>
                        <Link to="/register">
                            <FaUser />
                            Regiset
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Headers;
