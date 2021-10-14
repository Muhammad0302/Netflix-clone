import React from "react";
import Featured from "../components/featured/Featured";
import Navbar from "../components/navbar/Navbar";
import List from "../components/list/List";
import "./home.scss";
function Home() {
  return (
    <div className="home">
      <Navbar />
      <Featured type="movies" />
      <List />
    </div>
  );
}

export default Home;
