import React from 'react';

import Highlights from './Highlights';

export default class Experience extends React.Component {
  render() {

    const experiences = this.props.data;

    console.log(this.props.data);

    const noMarginStyle = {
      margin: '0px'
    }

    const workStyle = {
      margin: '50px 0'
    }

    var renderProjectLink = (projectLink) => {
      if (projectLink) {
        return <a class='link' href={projectLink}>Visit the project that I have worked on</a>
      }
    };

    const works = experiences
      .map((work, i) => 
        <div key={i} style={workStyle}>
          <h2 style={noMarginStyle}>
            <a href={work.link} class='lineLink' target='_blank'>
              <strong>{work.name}</strong>
            </a>
          </h2>
          <p style={noMarginStyle}>
            {work.date} <br />
            {work.title}
          </p>
          <Highlights highlights={work.highlights}/>
          {renderProjectLink(work.projectLink)}
        </div>
      );

    return (
      <div class ='fadeIn animated'>
        {works}
      </div>
    );
  }
}