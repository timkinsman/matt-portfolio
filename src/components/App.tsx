import React from 'react';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import About from './pages/About/About';
import Home from './pages/Home/Home';
import Work from './pages/Work/Work';
import WhatIDo from './pages/WhatIDo/WhatIDo';
import Blog from './pages/Blog/Blog';
import Contact from './pages/Contact/Contact';
import ScrollToTop from './util/ScrollToTop';
import Study from './pages/Study/Study';

function App() {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }
  
  return (
    <Router>
      <ScrollToTop>
        <Switch>
          <Route exact path="/about" component={About} />
          <Route exact path="/casestudies" component={Work} />
          <Route exact path="/whatido" component={WhatIDo} />
          <Route exact path="/otherwork" component={Blog} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/study" component={Study} />
          <Route component={Home} />
        </Switch>
      </ScrollToTop>
    </Router>
  );
}

export default App;
