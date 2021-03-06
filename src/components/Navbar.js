import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/studyculture.png';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link to="/" className="navbar-brand">
                    <img src={logo} style={{ height: "3rem", width: "auto" }} alt="" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item pe-3">
                            <Link to="/" className="nav-link active">Home</Link>
                        </li>
                        <li className="nav-item pe-3">
                            <Link to="/services" className="nav-link">Services</Link>
                        </li>
                        <li className="nav-item pe-3">
                            <Link to="/" className="nav-link">About Us</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;