import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Headers from "./components/Typo/Headers";
import Dashboard from "./Pages/Home/Dashboard";
import Register from "./Pages/Auth/Register";
import Login from "./Pages/Auth/Login";

const App = () => {
    return (
        <div>
            <Router>
                <div className="pages">
                    <Headers />
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                    </Routes>
                </div>
            </Router>
            <ToastContainer />
        </div>
    );
};
export default App;
