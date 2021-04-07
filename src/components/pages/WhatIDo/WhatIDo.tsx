import React from 'react';
import Footer from '../../layout/Footer/Footer';
import Item from '../../layout/Item/Item';
import Navbar from '../../layout/Navbar/Navbar';
import Tools from '../../layout/Tools/Tools';

import styles from "./WhatIDo.module.css";
import images from "../../../images/Emojis"

function WhatIDo() {
  return (
    <div className="global-fadein">
      <div className="global-container">
        <Navbar selected="whatido" />
        <div className="global-inner-container">
          <p className="global-title">What I do</p>
          
          <div className="global-wrapper">
            <div className={styles["whatido-grid-two"]}>
              <div>
                <p className="global-header">What I Try to do</p>
                <p className="global-footer">Listen, have at least showered before my first zoom call, solve complex problems, have fun, grab the bull by the horns, question everything, create transformative and memorable experiences, enable meaningful conversations between client and their customers, tell a story, create profits for business’, communicate clearly, consider everyone for accessibility, ask the right questions, make a positive impact.</p>
              </div>
              <div>
                <p className="global-header">What I <i>Don't</i> Try to do</p>
                <p className="global-footer">Make assumptions, ask leading questions, use too many buzzwords, go (way) over budget, abbreviate things, bite off more than I can chew, worry about success, let my OCD perfectionist traits seap in, spend too much time in figma, add to the world’s noise.</p>
              </div>
            </div>
          </div>

          <div className="global-wrapper">
            <p className={`${styles["whatido-added-margin"]} global-header`}>Principles</p>
            <div className={styles["whatido-grid-three"]}>
              <Item emoji={images.curious} header="Be curious" content="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using content here." footer=""/>
              <Item emoji={images.proactive} header="First proactive, then reative" content="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'," footer=""/>
              <Item emoji={images.systemsthinking} header="Systems thinking" content="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution. The point of using Lorem Ipsum." footer=""/>
              <Item emoji={images.unlock} header="Deliver real value" content="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English." footer=""/>
              <Item emoji={images.collaboration} header="Collaboration" content="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution." footer=""/>
              <Item emoji={images.validation} header="Validation is essential" content="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using content here." footer=""/>
            </div>
          </div>

          <div className="global-wrapper">
            <p className={`${styles["whatido-added-margin"]} global-header`}>Process</p>
            <div className={styles["whatido-grid-three"]}>
              <Item emoji={images.strategy} header="1. Strategy" content="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using content here." footer=""/>
              <Item emoji={images.research} header="2. Research" content="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English." footer=""/>
              <Item emoji={images.analyse} header="3. Analyse" content="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution." footer=""/>
              <Item emoji={images.ideation} header="4. Ideate" content="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution." footer=""/>
              <Item emoji={images.launch} header="5. Launch" content="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using content here." footer=""/>
              <Item emoji={images.measure} header="6. Measure" content="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using content." footer=""/>
            </div>
          </div>

          <div className="global-wrapper">
            <p className={`${styles["whatido-added-margin"]} global-header`}>Methods</p>
            <div className={styles["whatido-grid-three"]}>
              <div>
                <p className="global-content">A/B Testing</p>
                <p className="global-content">Accessibility Testing</p>
                <p className="global-content">Artefact Review</p>
                <p className="global-content">Competitor Analysis</p>
                <p className="global-content">Concept Usability Testing</p>
                <p className="global-content">Contextual Inquiry</p>
              </div>
              <div>
                <p className="global-content">Data Analytics Review</p>
                <p className="global-content">Diary Studies</p>
                <p className="global-content">Heuristics Evaluation</p>
                <p className="global-content">IA: Card Sort</p>
                <p className="global-content">IA: Tree Test</p>
                <p className="global-content">Journey Mapping</p>
              </div>
              <div>
                <p className="global-content">Online Surveys</p>
                <p className="global-content">Persona Development</p>
                <p className="global-content">Requirements Gathering</p>
                <p className="global-content">Revised User Flows</p>
                <p className="global-content">Stakeholder Interview</p>
                <p className="global-content">User Interviews</p>
              </div>
            </div>
          </div>

          <Tools />

          <div className="global-wrapper">
            <p className="global-header">Mentoring</p>
            <p className="global-footer">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
}

export default WhatIDo;
