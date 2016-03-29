import React from "react";

import Type from "./Type.js";

export default class Nav extends React.Component {
  render() {

    const buttons = ['About Me', 'Experiences', 'Projects']
      .map((type, i) => <Type key={i} type={type}/>) ;

    return (
      <div class="menu"> 
        <div class="wrapper">
          {buttons}
        </div>
      </div>
    );
  }
}
