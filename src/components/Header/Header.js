import React, { useEffect, useState } from "react";
import data from "../../data/movies.json";
const Header = () => {
  const [bannerBg, setBannerBg] = useState([]);
  useEffect(() => {
    fetch(data)
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

  return <div className="carousel w-full"></div>;
};

export default Header;
