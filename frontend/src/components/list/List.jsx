import "./list.scss";
import ListItem from "../listItem/ListItem";
import React, { useRef } from "react";
import { useEffect, useState } from "react";
import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";
function List() {
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  const [isMoved1, setIsMoved1] = useState(false);
  const [isMoved2, setIsMoved2] = useState(false);
  const [isMoved3, setIsMoved3] = useState(false);
  const [isMoved4, setIsMoved4] = useState(false);
  const [slideNumber1, setSlideNumber1] = useState(0);
  const [slideNumber2, setSlideNumber2] = useState(0);
  const [slideNumber3, setSlideNumber3] = useState(0);
  const [slideNumber4, setSlideNumber4] = useState(0);
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

  const handleClick2 = (direction) => {
    setIsMoved2(true);
    if (direction === "left" && slideNumber2 > 0) {
      setSlideNumber2(slideNumber2 - 1);
      var distance;
      if (ref2.current) {
        distance = ref2.current.getBoundingClientRect().x - 50;
      }
      ref2.current.style.transform = `translateX(${230 + distance}px)`;
    }
    if (direction === "right" && slideNumber2 < 4) {
      setSlideNumber2(slideNumber2 + 1);
      var distance;
      if (ref2.current) {
        distance = ref2.current.getBoundingClientRect().x - 50;
      }
      ref2.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  };

  const handleClick3 = (direction) => {
    setIsMoved3(true);
    if (direction === "left" && slideNumber3 > 0) {
      setSlideNumber3(slideNumber3 - 1);
      var distance;
      if (ref3.current) {
        distance = ref3.current.getBoundingClientRect().x - 50;
      }
      ref3.current.style.transform = `translateX(${230 + distance}px)`;
    }
    if (direction === "right" && slideNumber3 < 4) {
      setSlideNumber3(slideNumber3 + 1);
      var distance;
      if (ref3.current) {
        distance = ref3.current.getBoundingClientRect().x - 50;
      }
      ref3.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  };

  const handleClick4 = (direction) => {
    setIsMoved4(true);
    if (direction === "left" && slideNumber4 > 0) {
      setSlideNumber4(slideNumber4 - 1);
      var distance;
      if (ref4.current) {
        distance = ref4.current.getBoundingClientRect().x - 50;
      }
      ref4.current.style.transform = `translateX(${230 + distance}px)`;
    }
    if (direction === "right" && slideNumber4 < 4) {
      setSlideNumber4(slideNumber4 + 1);
      var distance;
      if (ref4.current) {
        distance = ref4.current.getBoundingClientRect().x - 50;
      }
      ref4.current.style.transform = `translateX(${-230 + distance}px)`;
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
      <span className="listTitle">Continue to watch</span>
      <div className="wrapper">
        <ArrowBackIosOutlined
          onClick={() => handleClick1("left")}
          className="sliderArrow left"
          style={{ display: !isMoved1 && "none" }}
        />
        <div ref={ref1} className="container">
          <ListItem index={0} />
          <ListItem index={1} />
          <ListItem index={2} />
          <ListItem index={3} />
          <ListItem index={4} />
          <ListItem index={5} />
          <ListItem index={6} />
          <ListItem index={7} />
          <ListItem index={8} />
          <ListItem index={9} />
        </div>
        <ArrowForwardIosOutlined
          onClick={() => handleClick1("right")}
          className="sliderArrow right"
        />
      </div>
      <span className="listTitle">Continue to watch</span>
      <div className="wrapper">
        <ArrowBackIosOutlined
          onClick={() => handleClick2("left")}
          style={{ display: !isMoved2 && "none" }}
          className="sliderArrow left"
        />
        <div ref={ref2} className="container">
          <ListItem index={0} />
          <ListItem index={1} />
          <ListItem index={2} />
          <ListItem index={3} />
          <ListItem index={4} />
          <ListItem index={5} />
          <ListItem index={6} />
          <ListItem index={7} />
          <ListItem index={8} />
          <ListItem index={9} />
        </div>
        <ArrowForwardIosOutlined
          onClick={() => handleClick2("right")}
          className="sliderArrow right"
        />
      </div>
      <span className="listTitle">Continue to watch</span>
      <div className="wrapper">
        <ArrowBackIosOutlined
          onClick={() => handleClick3("left")}
          className="sliderArrow left"
          style={{ display: !isMoved3 && "none" }}
        />
        <div ref={ref3} className="container">
          <ListItem index={0} />
          <ListItem index={1} />
          <ListItem index={2} />
          <ListItem index={3} />
          <ListItem index={4} />
          <ListItem index={5} />
          <ListItem index={6} />
          <ListItem index={7} />
          <ListItem index={8} />
          <ListItem index={9} />
        </div>
        <ArrowForwardIosOutlined
          onClick={() => handleClick3("right")}
          className="sliderArrow right"
        />
      </div>
      <span className="listTitle">Continue to watch</span>
      <div className="wrapper">
        <ArrowBackIosOutlined
          onClick={() => handleClick4("left")}
          className="sliderArrow left"
          style={{ display: !isMoved4 && "none" }}
        />
        <div ref={ref4} className="container">
          <ListItem index={0} />
          <ListItem index={1} />
          <ListItem index={2} />
          <ListItem index={3} />
          <ListItem index={4} />
          <ListItem index={5} />
          <ListItem index={6} />
          <ListItem index={7} />
          <ListItem index={8} />
          <ListItem index={8} />
        </div>
        <ArrowForwardIosOutlined
          onClick={() => handleClick4("right")}
          className="sliderArrow right"
        />
      </div>
    </div>
  );
}

export default List;
