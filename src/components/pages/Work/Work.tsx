import React from 'react';
import CardView from '../../layout/CardView/CardView';
import Footer from '../../layout/Footer/Footer';
import Navbar from '../../layout/Navbar/Navbar';

import styles from './Work.module.css'

function Work() {
  return (
    <div className="global-fadein">
      <div className="global-container">
        <Navbar selected="work" />
        <div className="global-inner-container">
          <p className="global-title">Work</p>
          <CardView id="null" />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Work;
