import React from "react";
import Stats from "../Stats";
import "./Nav.css";

// Component for the Navbar

const Nav = props => (
  <nav className="navbar">
    <ul>
      <li>
        <a href="/">Inuyasha Clickety Game</a>
      </li>
      <Stats score={props.score} topScore={props.topScore} />
      <li>
        Score: {props.score} | Top Score: {props.topScore}
      </li>
    </ul>
  </nav>
);

export default Nav;
