import React, { useState } from "react";
import data from "../../data/movies.json";
import Movie from "./Movie";
import WatchLater from "../WatchLater/WatchLater";
import AlreadyWatched from "../AlreadyWatched/AlreadyWatched";
const Movies = () => {
  const [watchLater, setWatchLater] = useState([]);
  const [alreadyWatched, setAlreadyWatched] = useState([]);
  const [showMovies, setShowMovies] = useState(9);
  const addMovieHandler = () => {
    setShowMovies(showMovies + 9);
  };
  const removeMovieHandler = () => {
    setShowMovies(showMovies - 9);
  };
  return (
    <div className="">
      <div className="border-2 border-rose-500">
        <h2 className="font-serif text-orange-400 text-center text-xl">
          Watch Later
        </h2>
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-1 bg-white">
          {watchLater.map((movie) => (
            <WatchLater
              key={movie.id}
              movie={movie}
              watchLater={watchLater}
              setWatchLater={setWatchLater}
            ></WatchLater>
          ))}
        </div>
      </div>
      <div className="border-2 border-rose-500">
        <h2 className="font-serif text-orange-400 text-center text-xl">
          Already Watched
        </h2>
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-1 bg-white">
          {alreadyWatched.map((movie) => (
            <AlreadyWatched
              key={movie.id}
              movie={movie}
              alreadyWatched={alreadyWatched}
              setAlreadyWatched={setAlreadyWatched}
            ></AlreadyWatched>
          ))}
        </div>
      </div>
      <div className="border-2 border-rose-500">
        <h2 className="font-serif text-orange-400 text-center text-xl">
          Shows
        </h2>
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-1 bg-white">
          {data.slice(0, showMovies).map((movie) => (
            <Movie
              key={movie.id}
              movie={movie}
              watchLater={watchLater}
              setWatchLater={setWatchLater}
              alreadyWatched={alreadyWatched}
              setAlreadyWatched={setAlreadyWatched}
            ></Movie>
          ))}
        </div>
        <div className="text-center">
          {showMovies < 100 && (
            <button
              className="btn btn-secondary mr-3 btn-xs"
              onClick={addMovieHandler}
            >
              See More
            </button>
          )}

          {showMovies > 9 && (
            <button
              className="btn btn-secondary btn-xs"
              onClick={removeMovieHandler}
            >
              See Less
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Movies;
