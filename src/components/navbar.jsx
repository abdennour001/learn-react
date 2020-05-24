import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
    const location = useLocation();

    const isActive = path => {
        return location.pathname === path;
    };

    const getNavLinkClass = path => {
        return isActive(path) ? "nav-link active" : "nav-link";
    };

    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <Link to="/" className="navbar-brand">
                Navbar
            </Link>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
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
                <ul className="navbar-nav mr-auto">
                    <Link to="/" className={getNavLinkClass("/")}>
                        <li className="nav-item">Home</li>
                    </Link>
                    <Link to="/shop" className={getNavLinkClass("/shop")}>
                        <li className="nav-item">Shop</li>
                    </Link>
                    <Link to="/about" className={getNavLinkClass("/about")}>
                        <li className="nav-item">About</li>
                    </Link>
                </ul>

                <form className="form-inline my-2 my-lg-0">
                    <input
                        className="form-control mr-sm-2"
                        type="search"
                        placeholder="Search (ex. Avengers Endgame)"
                        aria-label="Search"
                    />
                    <button
                        className="btn btn-outline-light my-2 my-sm-0"
                        type="submit"
                    >
                        Search
                    </button>
                </form>
            </div>
        </nav>
    );
};

export default NavBar;
