import React from "react";
import reactLogo from "/Users/aramhekimian/repos/react-static-page/src/react-icon-small.png";

export default function Navbar() {
  return (
    <div className="navbarCont">
      <img className="reactLogo" src={reactLogo} alt="React logo" />
      <h3>ReactFacts</h3>
      <h4>React Course - Project 1</h4>
    </div>
  );
}
