import React from "react";

import About from "./About";
import Experience from "./Experience";
import Nav from "./Nav";
import Project from "./Project";

export default class Content extends React.Component {

  render() {
    return (
      <div class='container'>
        <Nav />
        <div class='content'>
          <About />
          <Experience />
          <Project />
        </div>
      </div>
    );
  }
}