import React, { createContext, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
export const StateContext = createContext([]);
const Root = () => {
  const [watchLater, setWatchLater] = useState([]);
  const [alreadyWatched, setAlreadyWatched] = useState([]);
  const [showMovies, setShowMovies] = useState(20);

  return (
    <div>
      <Navbar></Navbar>
      <StateContext.Provider
        value={{
          watchLater: watchLater,
          setWatchLater: setWatchLater,
          alreadyWatched: alreadyWatched,
          setAlreadyWatched: setAlreadyWatched,
          showMovies: showMovies,
          setShowMovies: setShowMovies,
        }}
      >
        <div style={{ marginTop: "4.2rem" }}>
          <Outlet></Outlet>
        </div>
      </StateContext.Provider>
    </div>
  );
};

export default Root;
