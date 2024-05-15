import React, { useContext } from "react";
import { StateContext } from "../Root/Root";
import "../Styles/ImageStyle.css";
const WatchLater = () => {
  const { watchLater, setWatchLater } = useContext(StateContext);

  const removeHandler = (id) => {
    const newList = watchLater.filter((movie) => movie.id !== id);
    setWatchLater(newList);
  };
  return (
    <>
      <h2 className="font-serif text-orange-400 text-center text-xl">
        Watch Later
      </h2>
      <div className="bg-white flex min-h-screen flex-wrap justify-center">
        {watchLater.map((movie) => (
          <div className="card-container transition duration-300 ease-in-out hover:scale-110 card bg-base-100 shadow-xl m-2 p-1 border-2 border-rose-500">
            <figure className="p-3 ">
              <img src={movie.image} alt="Movie" />
            </figure>
            <div className="custom-card-body">
              <h2 className="text-center">
                {movie.title} ({movie.year})
              </h2>
              <small className="rating-container text-center">
                Rating: {movie.rating}
              </small>
              <small className="description-container">
                {movie.description}
              </small>
              <div className="button-container">
                <button
                  className="custom-button"
                  onClick={() => removeHandler(movie?.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default WatchLater;
