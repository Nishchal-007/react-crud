import React from "react";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>React Blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a
                    href="/create"
                    style={{
                        color: "#0e0e0e",
                        fontWeight: "700",
                        backgroundColor: "#48dbfb",
                        borderRadius: "8px",
                        padding: "10px",
                    }}
                >
                    New Blog
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
