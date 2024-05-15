import React, { useContext } from "react";
import data from "../../data/movies.json";
import Movie from "./Movie";
import { StateContext } from "../Root/Root";

const Movies = () => {
  const { showMovies, setShowMovies } = useContext(StateContext);
  const addMovieHandler = () => {
    setShowMovies(showMovies + 9);
  };
  const removeMovieHandler = () => {
    setShowMovies(showMovies - 9);
  };
  return (
    <>
      <div className="mt-2">
        <div>
          <h1 className="font-serif text-orange-400 text-center pb-3 text-5xl font-black">
            Shows
          </h1>
          <div className="bg-white flex min-h-screen flex-wrap justify-center">
            {data.slice(0, showMovies).map((movie) => (
              <Movie key={movie.id} movie={movie}></Movie>
            ))}
          </div>
          <div className="text-center">
            {showMovies < 100 && (
              <button
                className="font-serif btn btn-secondary btn-sm m-3"
                onClick={addMovieHandler}
              >
                See More
              </button>
            )}

            {showMovies > 20 && (
              <button
                className="font-serif btn btn-secondary btn-sm m-3"
                onClick={removeMovieHandler}
              >
                See Less
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Movies;
