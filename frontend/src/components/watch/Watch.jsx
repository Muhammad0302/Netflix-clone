import React from "react";
import "./watch.scss";
import { ArrowBackOutlined } from "@material-ui/icons";
// import { Link, useLocation } from "react-router-dom";
function Watch() {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackOutlined />
        Home
      </div>
      <embed
        className="video"
        autoPlay
        progress
        controls
        src="https://www.youtube.com/embed/2BkVf2voCr0?autoplay=1"
      />
    </div>
  );
}

export default Watch;
