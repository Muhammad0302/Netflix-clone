import React from "react";
import Featured from "../components/featured/Featured";
import Navbar from "../components/navbar/Navbar";
import List from "../components/list/List";
import "./home.scss";
import { useEffect, useState } from "react";
import axios from "axios";

function Home({ type }) {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);
  const url = "http://localhost:8800/api/";
  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(
          `${url}lists${type ? "?type=" + type : ""}${
            genre ? "&genre=" + genre : ""
          }`,
          {
            headers: {
              token:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNmJjMDlkOWI2MDc5M2JiMWVjZTE2NiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNDQ3OTMyOCwiZXhwIjoxNjM0OTExMzI4fQ.iU9TIkPafPg8A11JzvF15wlgarwXgLfIos2J5SS918M",
            },
          }
        );
        setLists(res.data);
        // console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
  }, [type, genre]);

  return (
    <div className="home">
      <Navbar />
      <Featured type={type} setGenre={setGenre} />
      {lists.map((list) => (
        <List list={list} />
      ))}
    </div>
  );
}

export default Home;
