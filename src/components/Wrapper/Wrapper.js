import React from "react";
import "./Wrapper.css";

//provides for the wrapper to contain all of the react content rendered to the page

const Wrapper = props => <div className="wrapper">{props.children}</div>;

export default Wrapper;
