import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>React Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link
                    to="/create"
                    style={{
                        color: "#0e0e0e",
                        fontWeight: "700",
                        backgroundColor: "#48dbfb",
                        borderRadius: "8px",
                        padding: "10px",
                    }}
                >
                    New Blog
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
