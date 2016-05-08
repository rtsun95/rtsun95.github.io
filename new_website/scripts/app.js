import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, createMemoryHistory} from 'react-router';

import Content from "./components/Content";
import About from './components/About';
import Experience from './components/Experience';
import Project from './components/Project';

const app = document.getElementById('app');

const history = createMemoryHistory(location);

ReactDOM.render(
  <Router history={history}>
    <Route path='/' component={Content}>
      <IndexRoute component={About}></IndexRoute>
      <Route path='experiences' component={Experience}></Route>
      <Route path='projects' component={Project}></Route>
    </Route>
  </Router>,
app);

