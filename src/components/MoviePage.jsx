import React, { useContext, useEffect, useState } from "react";
import { MoviesContext } from "./MoviesProvider";

const Movie = ({ match }) => {
    const [movies] = useContext(MoviesContext);
    const [movie, setMovie] = useState();

    const TMDB_IMAGE_BASE_URL = (width = 300) =>
        `https://image.tmdb.org/t/p/w${width}`;

    useEffect(() => {
        const movie = movies.find(
            m => String(m.id) === String(match.params.id)
        );
        setMovie(movie);
    }, [match.params.id, movies]);

    return (
        !!!movie ? <p className="lead">404 Not Found.</p> : (
            <div className="row container">
                <h2 className="col-12">{movie.title + ", " + movie.vote_average}</h2>
                <p className="col-12 text-muted">{movie.release_date}</p>
                <img
                    className="col-4 p-5"
                    src={`${TMDB_IMAGE_BASE_URL(300)}${movie.poster_path}`}
                    alt="Movie Poster"
                />
                <p className="col-12 lead">{movie.overview}</p>
            </div>
        )
    );
};

export default Movie;
