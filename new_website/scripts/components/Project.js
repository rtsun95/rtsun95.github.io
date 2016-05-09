import React from 'react';

export default class Project extends React.Component {
  render() {
    const projects = [
      {
        name: 'Meet',
        location: 'McHacks',
        link: '',
        date: 'February 2016',
        tech: 'Flask, Backbone.js',
        github: 'https://github.com/rtsun95/meet_front-end',
        description: 'Web app that ease the process of event-planning with friends.'
      },
      {
        name: 'Jumpp',
        location: 'Hack the North',
        link: '',
        date: 'September 2015',
        tech: 'ReactJS, Reapp, Firebase',
        github: 'https://github.com/ju-de/jumpp-bus',
        description: 'App that lets restaurant\'s customers order food in advance and generates receipts. Won the Intuit API prize.'
      },
      {
        name: 'GlowStone',
        location: 'WearHacks Toronto',
        link: 'http://factoriallabs.github.io/GlowStone-Web/public/index.html',
        date: 'May 2015',
        tech: 'Parse, AngularJS, Estimote Beacon',
        github: 'https://github.com/factorialLabs/GlowStone-Web',
        description: 'App that provides a seamless contextual information system for attractions and landmarks.'
      },
      {
        name: 'Roomi',
        location: 'Waterloo EngHack',
        link: '',
        date: 'March 2015',
        tech: 'AngularJS, Meteor',
        github: 'https://github.com/factorialLabs/roomi',
        description: 'Web app that provides useful tools for roommates to have a better living experience together. Won the second prize.'
      },
      {
        name: 'CommuniVoice',
        location: 'HackIllinois',
        link: '',
        date: 'March 2015',
        tech: 'AngularJS, Microsoft Azure, Android',
        github: 'https://github.com/rtsun95/crowdreport_web',
        description: 'Android and web app that allows citizens to report effortlessly issues to their city. Won the Yelp best Community hack prize.'
      },
      {
        name: 'WatAreFriends',
        location: 'TreetuHack',
        link: 'http://watarefriends.herokuapp.com/',
        date: 'November 2014',
        tech: 'AngularJS, Python/Flask, Bootstrap',
        github: 'https://github.com/icechen1/coop-friendship',
        description: 'website that allow students of the University of Waterloo to compare their study stream.'
      }
    ];

    const nameStyle = {
      margin: '0px'
    };

    const flexStyle = {
      display: 'flex',
      justifyContent: 'space-between'
    }

    const projectStyle = {
      margin: '50px 0'
    };

    var renderTitle = (name, link) => {
      if (link) {
        return <a href={link} class='lineLink' target='_blank'>
                  <strong>{name}</strong>
                </a>;
      }
      else {
        return <strong>{name}</strong>;
      }
    };

    const projectDOM = projects
      .map((project, i) => 
        <div key={i} style={projectStyle}>

          <h2 style={nameStyle}>
            {renderTitle(project.name, project.link)}
          </h2>

          <div style={flexStyle}>
            <span>
              {project.date}
            </span>
            <span>
              {project.location}
            </span>
          </div>

          <p>
            {project.description}
          </p>

          <div style={flexStyle}>
            <span>
              <i>{project.tech}</i>
            </span>
            <span>
              <a class='link' href={project.github}>View on github</a>
            </span>
          </div>

        </div>
      );

    return (
      <div class ='fadeIn animated'>
        {projectDOM}
      </div>
    );
  }
}