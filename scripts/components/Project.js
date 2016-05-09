import React from 'react';

export default class Project extends React.Component {
  render() {
    const projects = this.props.data;

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