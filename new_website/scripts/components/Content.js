import React from 'react';

import Nav from './Nav';

export default class Content extends React.Component {

  render() {
    return (
      <div class='container'>
        <Nav />
        <div class='content'>
          {this.props.children}
        </div>
      </div>
    );
  }
};
