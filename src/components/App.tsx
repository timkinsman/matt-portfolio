import React from 'react';
import './App.css';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Navbar from './layout/Navbar';
import Footer from './layout/Footer';

import About from './pages/About';
import Home from './pages/Home';
import Work from './pages/Work';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/about" component={About} />
        <Route exact path="/work" component={Work} />
        <Route component={Home} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
