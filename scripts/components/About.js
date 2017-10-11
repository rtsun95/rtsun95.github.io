import React from 'react';

export default class About extends React.Component {

  render() {

    const aboutStyle = {
      textAlign: 'justify'
    }

    return (
      <div class ='fadeIn animated' style={aboutStyle}>
        <p>
          Hi, I'm <strong>RuoTai Sun</strong>, currently studying Software Engineering at the University of Waterloo, class of 2019.
          I'm a programmer and web developer with a particular interest in <strong>machine learning</strong> and <strong>augmented/virtual reality</strong>.
        </p>
        <p>
          I'm looking for internship opportunities for Winter (January - April) 2018. I'm currently on a study abroad term at Yonsei University, Seoul, South Korea.
          I previously interned at <strong>Bloomberg</strong>, <strong>InfoScout</strong>, <strong>Ticketfi</strong>, <strong>BuildDirect's Design Center</strong> and <strong>Autodesk</strong>.
        </p>
        <p>
          I also enjoy rock climbing, photography, playing board games and Civilization V/VI.
        </p>
      </div>
    );
  }
}