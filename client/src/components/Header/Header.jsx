import React from 'react';

import { Link } from "react-router-dom";


const Header = () => {
    return (
            <div className="banner-index">
                <nav className="navbar navbar-expand-lg navbar-dark" id="navbar1">
                    <Link to="/" className="navbar-brand">Eduardo Pineda</Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ml-auto">
                            <Link to="/AboutMe" className="nav-link">About Me</Link>
                            <Link to="/Projects" className="nav-link">Projects</Link>
                        </div>
                    </div>
                </nav>

                <div className="banner-text">
                    <h1 className="banner-author">I am Eduardo Pineda</h1>
                    <p>and I'm an aspiring Web Developer.</p>
                </div>
            </div>
    );
};

export default Header;