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
function ListItem({ index }) {
  const [isHovered, setIsHovered] = useState(false);
  const trailer = "https://www.youtube.com/embed/2BkVf2voCr0?autoplay=1";
  return (
    <div
      className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      {isHovered && (
        <>
          <Link
            to="/watch"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <embed className="video" src={trailer} autoPlay={true} loop />
            <div className="itemInfo">
              <div className="icons">
                <PlayArrow className="icon" />
                <Add className="icon" />
                <ThumbUpAltOutlined className="icon" />
                <ThumbDownOutlined className="icon" />
              </div>
              <div className="itemInfoTop">
                <span>1 hour 14 mins</span>
                <span className="limit">+16</span>
                <span>1999</span>
              </div>
              <div className="desc">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non
                voluptates iusto cum voluptas modi corrupti. Accusantium
                similique odit laudantium,
              </div>
              <div className="genre">Action</div>
            </div>
          </Link>
        </>
      )}
    </div>
  );
}

export default ListItem;
