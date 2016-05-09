import React from 'react';

export default class Header extends React.Component {
  render() {

    var headerStyle =  {
        textAlign: 'center',
        margin: '20px 0'
    };

    return (
      <div class='header' style={headerStyle}>
        <h1>RuoTai Sun </h1>
        <h2>Software Engineer</h2>
      </div>
    );
  }
}