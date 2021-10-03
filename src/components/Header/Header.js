import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Header.css";

document.addEventListener('scroll', () => {
    const headerElement = document.querySelector('header');
    window.scrollY > 100 ?
        headerElement.style.background = 'white'
        : headerElement.style.background = 'transparent';
})

const Header = () => {
    return (
        <header>
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light bg-transparent py-4">
                    <div className="container-fluid">
                        <NavLink className="navbar-brand text-danger fw-bold fs-2 py-0" to="/">
                            BerYoga
                        </NavLink>
                        <button className="navbar-toggler shadow-none border-0" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navBar" aria-controls="navBar" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse flex-grow-0" id="navBar">
                            <div className="navbar-nav text-center fw-bold">
                                <NavLink className="nav-link px-3 active" aria-current="page" to="/home" activeStyle={{ color: "red" }}>Home</NavLink>
                                <NavLink className="nav-link px-3" to="/services" activeStyle={{ color: "red" }}>Services</NavLink>
                                <NavLink className="nav-link px-3" to="/pricing" activeStyle={{ color: "red" }}>Pricing</NavLink>
                                <NavLink className="nav-link px-3" to="/contact" activeStyle={{ color: "red" }}>Contact</NavLink>
                            </div>
                            <div className="login text-center py-2 py-lg-0">
                                <NavLink to="/login">
                                    <button className="btn bg-danger text-white rounded-pill px-4 mx-5">Login</button>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;