import React from 'react';
import { Link } from 'react-router';

export default class Type extends React.Component {
  render() {

    var liStyle = {
        width: '100px',
        padding: '0px 3px',
        margin: '0px 3px',
        textAlign: 'center',
        display: 'inline-block'
    };

    return (
      <li style={liStyle}>
        <Link to={this.props.link}>
          {this.props.type}
        </Link>
      </li>
    );
  }
}
