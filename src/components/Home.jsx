import React, { useContext } from "react";
import { MoviesContext } from "./MoviesProvider";
import MovieCard from "./MovieCard";

const Home = () => {
    const [movies] = useContext(MoviesContext);

    return (
        <div className="row text-center justify-content-center">
            {movies.map(movie => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
    );
};

export default Home;
