import React from "react";
import "./listItem.scss";
import { Link } from "react-router-dom";
import {
  PlayArrow,
  Add,
  ThumbUpAltOutlined,
  ThumbDownOutlined,
} from "@material-ui/icons";
import { useEffect, useState } from "react";
import axios from "axios";
function ListItem({ index, item }) {
  const url = "http://localhost:8800/api/";
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});
  // const trailer = "https://www.youtube.com/embed/2BkVf2voCr0?autoplay=1";
  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get(url + "movies/find/" + item, {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNmJjMDlkOWI2MDc5M2JiMWVjZTE2NiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNDQ3OTMyOCwiZXhwIjoxNjM0OTExMzI4fQ.iU9TIkPafPg8A11JzvF15wlgarwXgLfIos2J5SS918M",
          },
        });
        setMovie(res.data);
        // console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMovie();
  }, [item]);

  return (
    <div
      className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        to={{ pathname: "/watch", movie: movie }}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <>
          <img src={movie?.imgSm} alt="" />
          {isHovered && (
            <>
              <embed
                className="video"
                src={movie?.video}
                autoPlay={true}
                loop
              />
              <div className="itemInfo">
                <div className="icons">
                  <PlayArrow className="icon" />
                  <Add className="icon" />
                  <ThumbUpAltOutlined className="icon" />
                  <ThumbDownOutlined className="icon" />
                </div>
                <div className="itemInfoTop">
                  <span>1 hour 14 mins</span>
                  <span className="limit">+{movie.limit}</span>
                  <span>{movie.year}</span>
                </div>
                <div className="desc">{movie.desc}</div>
                <div className="genre">{movie.genre}</div>
              </div>
            </>
          )}
        </>
      </Link>
    </div>
  );
}

export default ListItem;
