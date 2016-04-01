import React from 'react';

import Type from './Type.js';

export default class Nav extends React.Component {
  render() {

    const links = ['/', 'experiences', 'projects'];
    const buttons = ['About', 'Experiences', 'Projects']
      .map((type, i) => <Type key={i} type={type} link={links[i]}/>) ;

    return (
      <div class='menu'> 
          <ul>
            {buttons}
          </ul>
      </div>
    );
  }
}
