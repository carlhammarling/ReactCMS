import React from "react";
import "./NotFound.scss";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="home">
      <h1>Whoops! This site could not be found.</h1>
      <ul>
        <li>
          <NavLink to="/">Back to home.</NavLink>{" "}
        </li>
      </ul>
    </div>
  );
};

export default NotFound;
