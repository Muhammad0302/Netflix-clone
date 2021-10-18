import "./list.scss";
import ListItem from "../listItem/ListItem";
import React, { useRef } from "react";
import { useEffect, useState } from "react";
import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";
function List({ list }) {
  const ref1 = useRef();
  const [isMoved1, setIsMoved1] = useState(false);
  const [slideNumber1, setSlideNumber1] = useState(0);
  const handleClick1 = (direction) => {
    setIsMoved1(true);
    if (direction === "left" && slideNumber1 > 0) {
      setSlideNumber1(slideNumber1 - 1);
      var distance;
      if (ref1.current) {
        distance = ref1.current.getBoundingClientRect().x - 50;
      }
      ref1.current.style.transform = `translateX(${230 + distance}px)`;
    }
    if (direction === "right" && slideNumber1 < 4) {
      setSlideNumber1(slideNumber1 + 1);
      var distance;
      if (ref1.current) {
        distance = ref1.current.getBoundingClientRect().x - 50;
      }
      ref1.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  };

  // code to find the index of specfic DOM element

  // const ref = useRef();
  // useEffect(() => {
  //   if (ref.current) {
  //     const distance = ref.current.getBoundingClientRect();
  //     console.log(distance);
  //   }
  //   }, []);

  return (
    <div className="list">
      <span className="listTitle">{list.title}</span>
      <div className="wrapper">
        <ArrowBackIosOutlined
          onClick={() => handleClick1("left")}
          className="sliderArrow left"
          style={{ display: !isMoved1 && "none" }}
        />
        <div ref={ref1} className="container">
          {list.content.map((item, index) => (
            <ListItem index={index} item={item} />
          ))}

          {/* <ListItem index={0} />
          <ListItem index={1} />
          <ListItem index={2} />
          <ListItem index={3} />
          <ListItem index={4} />
          <ListItem index={5} />
          <ListItem index={6} />
          <ListItem index={7} />
          <ListItem index={8} />
          <ListItem index={9} /> */}
        </div>
        <ArrowForwardIosOutlined
          onClick={() => handleClick1("right")}
          className="sliderArrow right"
        />
      </div>
    </div>
  );
}

export default List;
