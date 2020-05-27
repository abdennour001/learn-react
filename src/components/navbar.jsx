import React, { useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import Axios from "axios";
import { MoviesContext } from "./MoviesProvider";

const NavBar = () => {
    const [movies, setMovies] = useContext(MoviesContext);

    const location = useLocation();

    const [query, setQuery] = useState("");

    const isActive = path => {
        return location.pathname === path;
    };

    const getNavLinkClass = path => {
        return isActive(path) ? "nav-link active" : "nav-link";
    };

    const onChangeQuery = e => {
        setQuery(e.target.value);
    };

    const search = e => {
        e.preventDefault();
        const url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`;
        Axios.get(url)
            .then(response => {
                setMovies(response.data.results);
                console.table(response.data.results)
            })
            .catch(error => {
                console.error(error);
            });
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
                        onChange={onChangeQuery}
                        className="form-control mr-sm-2"
                        type="search"
                        placeholder="Search (ex. Avengers Endgame)"
                        aria-label="Search"
                    />
                    <button
                        className="btn btn-outline-light my-2 my-sm-0"
                        type="submit"
                        onClick={search}
                    >
                        Search
                    </button>
                </form>
            </div>
        </nav>
    );
};

export default NavBar;
