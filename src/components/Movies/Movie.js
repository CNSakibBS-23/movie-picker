import React, { useContext } from "react";
import { StateContext } from "../Root/Root";
import "../Styles/ImageStyle.css";
const Movie = ({ movie }) => {
  const { watchLater, setWatchLater, alreadyWatched, setAlreadyWatched } =
    useContext(StateContext);

  const handleWatchLater = (id) => {
    if (watchLater.map((movie) => movie.id).includes(id)) {
      return alert("Already Added!!");
    } else {
      setWatchLater((prev) => [...prev, movie]);
      return alert("Added to Watch Later!!");
    }
  };

  const handleAlreadyWatched = (id) => {
    if (alreadyWatched.map((movie) => movie.id).includes(id)) {
      return alert("Already Added");
    } else {
      setAlreadyWatched((prev) => [...prev, movie]);
      return alert("Added to Already Watched!!");
    }
  };

  return (
    <>
      <div className="card-container transition duration-300 ease-in-out hover:scale-110 card bg-base-100 shadow-xl m-2 p-1 border-2 border-rose-500">
        <figure className="p-1">
          <img src={movie.image} alt="Movie" />
        </figure>
        <div className="custom-card-body">
          <h2 className="text-center text-orange-600">
            {movie.title} ({movie.year})
          </h2>
          <small className="rating-container text-center">
            Rating: {movie.rating}
          </small>
          <small className="description-container">{movie.description}</small>
          <div className="button-container">
            <button
              onClick={() => handleWatchLater(movie.id)}
              className="custom-button"
            >
              Watch Later
            </button>
            <button
              onClick={() => handleAlreadyWatched(movie.id)}
              className="custom-button"
            >
              Watched
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Movie;
