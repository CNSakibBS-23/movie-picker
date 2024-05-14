import React from "react";

const Movie = ({
  movie,
  watchLater,
  setWatchLater,
  alreadyWatched,
  setAlreadyWatched,
}) => {
  const handleWatchLater = (id) => {
    if (watchLater.map((movie) => movie.id).includes(id)) {
      return alert("Already Added!!");
    } else {
      setWatchLater((prev) => [...prev, movie]);
    }
  };

  const handleAlreadyWatched = (id) => {
    if (alreadyWatched.map((movie) => movie.id).includes(id)) {
      return alert("Already Added");
    } else {
      setAlreadyWatched((prev) => [...prev, movie]);
    }
  };

  return (
    <>
      <div className="card card-side bg-base-100 shadow-xl m-3 p-1 flex justify-center border-2 border-rose-500">
        <figure className="">
          <img src={movie.image} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="mb-5">{movie.title}</h2>
          <p className="">({movie.year})</p>
          <p>imDb: {movie.rating}</p>
          <div className="card-actions contents">
            <button
              onClick={() => handleWatchLater(movie.id)}
              className="btn btn-primary btn-xs"
            >
              Wishlist
            </button>
            <button
              onClick={() => handleAlreadyWatched(movie.id)}
              className="btn btn-primary btn-xs"
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
