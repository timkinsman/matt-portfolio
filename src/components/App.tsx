import React, { useEffect } from 'react';
import {connect} from "react-redux";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import Work from './pages/Work/Work';
import WhatIDo from './pages/WhatIDo/WhatIDo';
import Blog from './pages/Blog/Blog';
import Contact from './pages/Contact/Contact';
import ScrollToTop from './util/ScrollToTop';
import Study from './pages/Study/Study';
import $ from "jquery";

const App = (props: any) => {
  useEffect(() => {
    switch(props.portfolio.theme){
      case "LIGHT":
        $("body").css({"background": "#F5F5F5", "color": "#000000"})
        break;
      case "DARK":
        $("body").css({"background": "#0B0B0C", "color": "#FFFFFF"})
        break;
    }
  }, [props.portfolio.theme])

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

const mapStateToProps = ( state: { portfolio: any; } ) => {
  return {
    portfolio: state.portfolio
  }
}

export default connect(mapStateToProps, null)(App);
