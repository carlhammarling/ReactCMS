import React from "react";
import "./Home.scss";
import { NavLink } from "react-router-dom";

const Home = () => {

  return (
    <div className="home">
      <h1>Welcome to Bmarketo admin page</h1>
      <ul>
        <li>
          <NavLink to="/login">LOGIN TO CONTINUE</NavLink>{" "}
        </li>
      </ul>
    </div>
  );
};

export default Home;
