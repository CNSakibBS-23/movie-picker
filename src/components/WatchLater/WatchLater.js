import React from "react";
const WatchLater = ({ movie, setWatchLater, watchLater }) => {
  const removeHandler = (id) => {
    const newList = watchLater.filter((movie) => movie.id !== id);
    setWatchLater(newList);
  };
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl m-3 p-1 flex justify-center border-2 border-rose-500">
        <figure>
          <img src={movie?.image} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{movie?.title}</h2>
          <p>{movie?.year}</p>
          <p>imDb: {movie?.rating}</p>
          <div className="card-actions justify-end">
            <button
              className="btn btn-primary btn-xs"
              onClick={() => removeHandler(movie?.id)}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchLater;
