import React from 'react';
import CardView from '../../layout/CardView/CardView';
import Footer from '../../layout/Footer/Footer';
import Navbar from '../../layout/Navbar/Navbar';

function Work() {
  return (
    <div className="global-fadein">
      <Navbar selected="work" />
      <div className="global-inner-container">
        <p className="global-title">Case studies</p>
        <div className="global-wrapper" style={{paddingBottom: '0'}}>
          <h4>With over six years of experience in the industry, I have been fortunate enough to work with 25+ brands. Endeavouring to produce solutions to problems that enable and inspire others.</h4>
        </div>
        <CardView id="null" />
        <Footer />
      </div>
    </div>
  );
}

export default Work;
