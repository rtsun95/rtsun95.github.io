import React from 'react';

import Highlights from './Highlights';

export default class Experience extends React.Component {
  render() {

    const experiences = [
      {
        company: 'Autodesk',
        link: 'http://www.autodesk.com/',
        date: 'January 2016 - April 2016',
        title: 'Software Developer',
        highlights: [
          'Wrote and designed an end-to-end testing framweork using CasperJS and PhantomJS',
          'Implemented all the tests for the website using this framework, which improved the website\'s reliability',
          'Implemented new front-end modules and features using Backbone.js'
        ],
        projectLink: 'https://github.com/yoannmoinet/damon'
      },
      {
        company: 'BuildDirect\'s Design Center',
        link: 'https://www.builddirect.com/design-center',
        date: 'June 2015 - August 2015',
        title: 'Web Developer',
        highlights: [
          'Enhanced the room layout creation by improving the algorithm and queries using Django and jQuery',
          'Implemented a pdf package generator for client to download using ReportLab and Django',
          'Improved the user experience by providing different warnings to incompatible browsers and devices',
          'Integrated Google Analytics to the website to provide a better insight of user statistics'
        ]
      },
      {
        company: 'Tickefi',
        link: 'https://ticketfi.com/',
        date: 'May 2015 - June 2015',
        title: 'Web Developer',
        highlights: [
          'Contributed to write and design a RESTFul API using Ruby on Rails',
           'Implemented most of the company\'s unit tests using Rspec'
        ]
      }
    ];

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
              <strong>{work.company}</strong>
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