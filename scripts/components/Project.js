import React from 'react';

export default class Project extends React.Component {
  render() {
    const projects = this.props.data;

    const nameStyle = {
      margin: '0px'
    };

    const projectStyle = {
      margin: '50px 0'
    };

    const renderTitle = (name, link) => {
      if (link) {
        return <a href={link} class='lineLink' target='_blank'>
                  <strong>{name}</strong>
                </a>;
      }
      else {
        return <strong>{name}</strong>;
      }
    };

    const renderLocation = (location) => {
      if (location) {
        return <div>@ {location} </div>;
      }
      else {
        return;
      }
    };

    const projectDOM = projects
      .map((project, i) =>
        <div key={i} style={projectStyle}>

          <h2 style={nameStyle}>
            {renderTitle(project.name, project.link)}
          </h2>

          <div>
            {project.date}
          </div>

          {renderLocation(project.location)}

          <p>
            {project.description}
          </p>

          <div class='techGit'>
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