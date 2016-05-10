import React from 'react';

import Highlights from './Highlights';

export default class Experience extends React.Component {
  render() {

    var experiences = this.props.data;

    const noMarginStyle = {
      margin: '0px'
    }

    const flexStyle = {
      display: 'flex',
      justifyContent: 'space-between'
    }

    const workStyle = {
      margin: '50px 0'
    }

    var renderProjectLink = (projectLink, gitLink) => {
      if (projectLink) {
        return <div style={flexStyle}>
                <a class='link' href={projectLink}>Visit this project</a>
                <a class='link' href={gitLink}>View on github</a>
               </div>;
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
          {renderProjectLink(work.projectLink, work.gitLink)}
        </div>
      );

    return (
      <div class ='fadeIn animated'>
        {works}
      </div>
    );
  }
}