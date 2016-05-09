import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, createMemoryHistory} from 'react-router';

import Content from "./components/Content";
import About from './components/About';
import Experience from './components/Experience';
import Project from './components/Project';

import ExperienceData from './data/experiences';
import ProjectData from './data/projects';
import InitiativeData from './data/initiatives';


const ExperienceComponent = React.createClass({
  render() {
    return (
      <Experience data={ExperienceData}/>
    )
  }
});

const ProjectComponent = React.createClass({
  render() {
    return (
      <Project data={ProjectData}/>
    )
  }
});

const InitiativeComponent = React.createClass({
  render() {
    return (
      <Experience data={InitiativeData}/>
    )
  }
});

const app = document.getElementById('app');

const history = createMemoryHistory(location);

ReactDOM.render(
  <Router history={history}>
    <Route path='/' component={Content}>
      <IndexRoute component={About}></IndexRoute>
      <Route path='experiences' component={ExperienceComponent}></Route>
      <Route path='projects' component={ProjectComponent}></Route>
      <Route path='initiatives' component={InitiativeComponent}></Route>
    </Route>
  </Router>,
app);

