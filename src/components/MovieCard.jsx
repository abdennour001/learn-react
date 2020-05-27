import React from "react";
import { useHistory } from "react-router-dom";

const MovieCard = props => {
    const TMDB_IMAGE_BASE_URL = (width = 300) =>
        `https://image.tmdb.org/t/p/w${width}`;

    let history = useHistory();

    const goToMovie = id => {
        history.push("/movie/" + id)
    };

    return (
        <div className="col-md-6 col-lg-4 col-sm-12 pb-5">
            <div>
                <h4
                    onClick={() => goToMovie(props.movie.id)}
                    style={{ cursor: "pointer" }}
                >
                    {props.movie.title}
                </h4>
                <img
                    onClick={() => goToMovie(props.movie.id)}
                    style={{ cursor: "pointer" }}
                    src={`${TMDB_IMAGE_BASE_URL(300)}${
                        props.movie.poster_path
                    }`}
                    alt="Movie Poster"
                />
            </div>
        </div>
    );
};

export default MovieCard;
