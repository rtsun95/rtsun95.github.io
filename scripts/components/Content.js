import React from 'react';

import Nav from './Nav';
import Header from './Header';
import Footer from './Footer';

export default class Content extends React.Component {
  render() {

    const containerStyle = {
      maxWidth: '1440px',
      margin: '0 auto'
    };

    const contentStyle = {
      maxWidth: '650px',
      margin: '50px auto',
      padding: '0 10px'
    }

    return (
      <div class='container' style={containerStyle}>
        <Header />
        <Nav />
        <div id='game-of-life'></div>
        <div class='content' style={contentStyle}>
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
};
