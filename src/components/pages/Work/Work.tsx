import React from 'react';
import CardView from '../../layout/CardView/CardView';
import Footer from '../../layout/Footer/Footer';
import Navbar from '../../layout/Navbar/Navbar';

import styles from "./Work.module.css"

function Work(props: any) {
  return (
    <div className="global-fadein">
      <div className="global-main-container">
        <Navbar selected="work" />
        <div className="global-container">
          <p className="global-title">Case studies</p>
          <div className={`${styles["work-description"]} global-wrapper`}>
            <h4>With over six years of experience in the industry, I have been fortunate enough to work with 25+ brands. Endeavouring to create experiences through products and services that exist to solve genuine problems and serve user needs.</h4>
          </div>
          <CardView filter={props.location.state !== undefined && props.location.state.filter ? props.location.state.filter : ""} id="null" />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Work;
