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
          <p className="global-title">Case Studies</p>
          <p className="global-content">With over six years of experience in the industry, I have been fortunate enough to work with 25+ brands. Endeavouring to produce solutions to problems that enable and inspire others.</p>
          <CardView id="null" />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Work;
