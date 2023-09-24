import React, { useEffect, useState } from "react";
import { API_KEY, imageUrl } from "./constants";
import "./Banner.css";
import axios from "../axios.js";

function Banner() {
  const [movie, setMovie] = useState({});
  useEffect(() => {
    axios
      .get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        console.log(response.data.results);
        setMovie(response.data.results[Math.floor(Math.random() * 20)]);
      });
  }, []);
  return (
    <div
      style={{
        backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ""})`,
      }}
      className="banner"
    >
      <div className="content">
        <h1 className="title">
          {movie ? movie.original_title || movie.original_name : ""}
        </h1>
        <div className="bannerbuttons">
          <button className="button">Play</button>
          <button className="button">My list</button>
        </div>
        <h1 className="desc">{movie ? movie.overview : ""}</h1>
      </div>
      <div className="fade"></div>
    </div>
  );
}

export default Banner;
