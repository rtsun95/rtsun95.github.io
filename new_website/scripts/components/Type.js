import React from 'react';
import { Link } from 'react-router';

export default class Type extends React.Component {
  render() {

    return (
      <Link to={this.props.link}>
        <li>
          {this.props.type}
        </li>
      </Link>
    );
  }
}
