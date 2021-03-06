import React from 'react';

import Type from './Type';

export default class Footer extends React.Component {
  render() {

    const footerStyle =  {
        textAlign: 'center',
        margin: '20px 0'
    };

    const ulStyle = {
        margin: '0px auto',
        padding: '0px',
        listStyleType: 'none',
    };

    const links = ['mailto:sunruotai95@gmail.com',
                   'https://github.com/rtsun95',
                   'https://ca.linkedin.com/in/rtsun',
                   'resume.pdf',
                   'https://www.instagram.com/ruotai/'];


    const buttons = ['Email', 'Github', 'LinkedIn', 'Resume', 'Instagram']
      .map((type, i) => <Type key={i} type={type} link={links[i]} anchor={true}/>);

    return (
      <div class='menu' style={footerStyle}>
        <ul style={ulStyle}>
          {buttons}
        </ul>
      </div>
    );
  }
}