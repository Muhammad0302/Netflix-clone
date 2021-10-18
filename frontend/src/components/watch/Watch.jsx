import React from "react";
import "./watch.scss";
import { ArrowBackOutlined } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";
function Watch() {
  const location = useLocation();
  const movie = location.movie;
  // console.log(movie);
  return (
    <div className="watch">
      <div className="back">
        <Link
          to="/"
          className="link"
          style={{ display: "flex", alignItems: "center" }}
        >
          <ArrowBackOutlined />
          Home
        </Link>
      </div>
      <embed className="video" autoPlay progress controls src={movie.video} />
    </div>
  );
}

export default Watch;
