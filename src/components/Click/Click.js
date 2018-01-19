import React from "react";
import "./Click.css";

const Click = props => (
  <div
    role="img"
    onClick={() => props.handleClick(props.id)}
    style={{ backgroundImage: `url("${props.image}")` }}
    className={`click${props.shake ? " shake" : ""}`}
  />
);

export default Click;
