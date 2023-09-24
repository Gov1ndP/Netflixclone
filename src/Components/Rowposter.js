import React, { useEffect, useState } from "react";
import "./Rowposter.css";
import Youtube from "react-youtube";
import axios from "../axios";
import { API_KEY, imageUrl } from "./constants";

function Rowposter(props) {
  const [movies, setMovies] = useState([]);
  const [urlId, setUrlId] = useState("");
  useEffect(() => {
    axios.get(props.url).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  function handleClick(id) {
    axios
      .get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        if (response.data.results.length !== 0) {
          setUrlId(response.data.results[0]);
        }
      });
  }

  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="poster">
        {movies.map((obj) => {
          return (
            <img
              onClick={() => handleClick(obj.id)}
              className={props.isSmall ? "smallImage" : "image"}
              src={`${imageUrl + obj.backdrop_path}`}
              alt="poster"
            />
          );
        })}
      </div>
      {urlId && <Youtube videoId={urlId.key} opts={opts}></Youtube>}
    </div>
  );
}

export default Rowposter;
