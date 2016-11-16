import React from 'react';
import { Link } from 'react-router';

export default class Type extends React.Component {
  render() {

    const liStyle = {
        width: '100px',
        padding: '0px 3px',
        margin: '0px 3px',
        textAlign: 'center',
        display: 'inline-block'
    };

    let link;

    if (this.props.anchor === true) {
      link = <a class='link' href={this.props.link}> {this.props.type} </a>;
    } else {
      link = <Link class='route' to={this.props.link}> {this.props.type} </Link>;
    }

    return (
      <li style={liStyle}>
        {link}
      </li>
    );
  }
}
