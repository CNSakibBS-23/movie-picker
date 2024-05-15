import React from "react";
import "../Styles/Header.css";
import bannerbg from "../assests/3988284.jpg";
const Header = () => {
  return (
    <>
      <div className="header-container">
        <img className="size-80 w-screen blur-sm" src={bannerbg} alt=""></img>
        <h1 className="headerDescription">
          <span className="p-1 bg-red-500 text-black font-serif rounded-lg">
            Pick Your Movies From Here!
          </span>
        </h1>
      </div>
    </>
  );
};

export default Header;
