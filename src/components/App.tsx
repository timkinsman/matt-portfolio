import React from 'react';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Links from './layout/Links';

import About from './pages/About';
import Home from './pages/Home';
import Work from './pages/Work';
import WhatIDo from './pages/WhatIDo';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/about" component={About} />
        <Route exact path="/work" component={Work} />
        <Route exact path="/whatido" component={WhatIDo} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/contact" component={Contact} />
        <Route component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
