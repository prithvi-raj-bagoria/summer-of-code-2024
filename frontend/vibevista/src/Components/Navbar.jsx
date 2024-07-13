import React from "react";

import Button from "./Button";

const Navbar = ({ logo, logowidth, bgColor = "light", navColor = "light" }) => {
    return (
        <nav
            className={`navbar navbar-expand-lg navbar-${navColor} `}
            style={{ background: bgColor }}
        >
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src={logo} style={{ width: logowidth }} />
                    VibeVista
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
                    <form className="d-flex" role="search">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <Button text="Search" style="btn btn-primary  " />
                        <Button
                            text="Logout"
                            style="ms-2 btn btn-danger rounded-4"
                        />
                    </form>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
