import React from 'react';

import Type from './Type.js';

export default class Nav extends React.Component {
  render() {

    /*NAV BAR*/
    var menuStyle = {
        margin: '1.5em auto',
        textAlign: 'center'
    };

    var ulStyle = {
        margin: '0px auto',
        padding: '0px',
        listStyleType: 'none',
    };

    const links = ['/', 'experiences', 'projects'];
    const buttons = ['About', 'Experiences', 'Projects']
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
