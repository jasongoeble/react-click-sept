import React from "react";
import "./Title.css";

//provides for the definition of the title properties

const Title = props => <h1 className="primary-title">{props.children}</h1>;

export default Title;
