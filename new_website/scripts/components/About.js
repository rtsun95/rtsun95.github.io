import React from 'react';

export default class About extends React.Component {

  render() {

    var aboutStyle = {
      textAlign: 'center'
    }

    return (
      <div class ='fadeIn animated' style={aboutStyle}>
        <p> 
          Hi, I'm <strong>RuoTai Sun</strong>, currently studying Software Engineering at the University of Waterloo, class of 2019.
          I'm a programmer and web developer with a particular interest in <strong>machine learning</strong> and <strong>augmented/virtual reality</strong>.
        </p>
        <p>
          I'm looking for internship opportunities for Fall (September - December) 2016.
          I previously worked at <strong>Ticketfi</strong>, <strong>BuildDirect's Design Center</strong> and <strong>Autodesk</strong>.
        </p>
        <p>
          I also enjoy rock climbing, playing board games and Civilization V.
        </p>
      </div>
    );
  }
}