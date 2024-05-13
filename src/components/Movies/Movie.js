import React from "react";
import {
  MovieCard,
  CardRatings,
  CardDescription,
  CardButton,
} from "../Styles/Movie.style";

const Movie = ({ movie, setWatchLater, setAlreadyWatched }) => {
  const handleWatchLater = () => {
    setWatchLater((prev) => [...prev, movie]);
  };

  const handleAlreadyWatched = () => {
    setAlreadyWatched((prev) => [...prev, movie]);
  };

  return (
    <MovieCard>
      <img src={movie.image} alt="movie poster" />
      <h3>{movie.title}</h3>
      <p>{movie.year}</p>
      <CardRatings>{movie.rating}</CardRatings>
      <CardDescription>{movie.description.slice(0, 111)}...</CardDescription>
      <div>
        <CardButton onClick={handleWatchLater}>Watch Later</CardButton>
        <CardButton onClick={handleAlreadyWatched}>Already Watched</CardButton>
      </div>
    </MovieCard>
  );
};

export default Movie;
