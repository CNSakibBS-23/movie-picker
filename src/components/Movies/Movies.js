import React, { useState } from "react";
import data from "../../data/movies.json";
import { ShowMovies } from "../Styles/Movies.styles";
import Movie from "./Movie";
const Movies = () => {
  const [watchLater, setWatchLater] = useState([]);
  const [alreadyWatched, setAlreadyWatched] = useState([]);
  return (
    <>
      <h3>Watch Later</h3>
      {watchLater.map((movie) => (
        <li>{movie.title}</li>
      ))}
      <h3>Already Watched</h3>
      {alreadyWatched.map((movie) => (
        <li>{movie.title}</li>
      ))}
      <ShowMovies>
        {data.map((movie) => (
          <Movie
            key={movie.id}
            movie={movie}
            setWatchLater={setWatchLater}
            setAlreadyWatched={setAlreadyWatched}
          ></Movie>
        ))}
      </ShowMovies>
    </>
  );
};

export default Movies;
