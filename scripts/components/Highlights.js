import React from 'react';

export default class Highlights extends React.Component {
  render() {

    const highlights = this.props.highlights
      .map((highlight, i) => <li key={i}>{highlight}</li>);

    return (
      <ul>
        {highlights}
      </ul>
    );
  }
}
