import React, { useState, useEffect } from "react";
import axios from "axios";

export const MoviesContext = React.createContext();

const MoviesProvider = props => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        // make the api call
        const url = `${process.env.REACT_APP_MOVIE_DB_BASE_URL}/movie/top_rated?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}&language=en-US&page=1`;
        axios
            .get(url)
            .then(response => {
                setMovies(response.data.results);
                console.log(response.data.results);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    return (
        <MoviesContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MoviesContext.Provider>
    );
};

export default MoviesProvider;
