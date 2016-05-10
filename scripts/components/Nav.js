import React from 'react';

import Type from './Type.js';

export default class Nav extends React.Component {
  render() {

    /*NAV BAR*/
    const menuStyle = {
        margin: '1.5em auto',
        textAlign: 'center'
    };

    const ulStyle = {
        margin: '0px auto',
        padding: '0px',
        listStyleType: 'none',
    };

    const links = ['/', 'experiences', 'projects', 'initiatives'];
    var buttons = ['About', 'Experiences', 'Projects', 'Initiatives']
      .map((type, i) => <Type key={i} type={type} link={links[i]} anchor={false}/>);

    return (
      <div class='menu' style={menuStyle}>
          <ul style={ulStyle}>
            {buttons}
          </ul>
      </div>
    );
  }
}
