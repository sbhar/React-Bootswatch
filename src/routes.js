import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import App from './App';
import Contact from './components/Contact/Contact';
import NotFound from './components/NotFound/NotFound';
import Home from './components/Home/Home';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App}>

        <IndexRoute component={Home}/>

        <Route path="/home" component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="*" component={NotFound} />
    </Route>
  </Router>
);

export default Routes;