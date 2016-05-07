import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, browserHistory} from 'react-router';

import Content from "./components/Content";
import About from './components/About';
import Experience from './components/Experience';
import Project from './components/Project';

const app = document.getElementById('app');
ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={Content}>
      <IndexRoute component={About}></IndexRoute>
      <Route path='experiences' component={Experience}></Route>
      <Route path='projects' component={Project}></Route>
    </Route>
  </Router>,
app);

