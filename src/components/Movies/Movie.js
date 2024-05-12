import React from 'react';
import { MovieCard } from '../Styles/Movie.style';

const Movie = ({ movie }) => {
    const { title, description, image, year, rating } = movie;
    return (
        <MovieCard>
            <img src={image} alt="movie poster" />
            <h3>{title}</h3>
            <p>{year}</p>
            <p>{rating}</p>
            <p>{description}</p>
            <div>
                <button>Watch Later</button>
                <button>Already Watched</button>
            </div>
        </MovieCard>
    );
};

export default Movie;