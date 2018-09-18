import React from "react";

//container definition for holding content
const Container = props =>
  <div className={`container${props.fluid ? "-fluid" : ""}`}>
    {props.children}
  </div>;

export default Container;
