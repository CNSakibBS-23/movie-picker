import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import AlreadyWatched from "./components/AlreadyWatched/AlreadyWatched";
import Root from "./components/Root/Root";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WatchLater from "./components/WatchLater/WatchLater";
import Home from "./components/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/watchLater",
        element: <WatchLater />,
      },
      {
        path: "/alreadyWatched",
        element: <AlreadyWatched />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
