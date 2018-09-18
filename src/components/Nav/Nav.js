import React from "react";
import "./Nav.css";

//generates the nav header information and provides for the animated link
//i've removed the text from the link, it will not be visible on the rendered page

const Nav = props => (
    <nav role="banner" className="primary-header">
        <ul>
            <li className="brand animated lightSpeedIn">
                <a href="/clicky-game/">{props.title}</a>
            </li>

            <li id="rw">{props.rightWrong}</li>

            <li id="cur-sco">Current Score: {props.score}</li>

            <li id="top-sco">Top Score: {props.topScore}</li>
        </ul>
    </nav>
);

export default Nav;