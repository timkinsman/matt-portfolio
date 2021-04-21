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
        <Navbar selected="whatido" />
        <div className="global-inner-container">
          <p className="global-title">What I do</p>
          
          <div className="global-wrapper">
            <div className={styles["whatido-grid-two"]}>
              <div>
                <h3>What I Try to do</h3>
                <p>Listen, have at least showered before my first zoom call, solve complex problems, have fun, grab the bull by the horns, question everything, create transformative and memorable experiences, enable meaningful conversations between client and their customers, tell a story, create profits for business’, communicate clearly, consider everyone for accessibility, ask the right questions, make a positive impact.</p>
              </div>
              <div>
                <h3>What I <i>Don't</i> Try to do</h3>
                <p>Make assumptions, ask leading questions, use too many buzzwords, go (way) over budget, abbreviate things, bite off more than I can chew, worry about success, let my OCD perfectionist traits seap in, spend too much time in figma, add to the world’s noise.</p>
              </div>
            </div>
          </div>

          <div className="global-wrapper">
            <h3 className={styles["whatido-added-margin"]}>Principles</h3>
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
            <h3 className={styles["whatido-added-margin"]}>Process</h3>
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
            <h3 className={styles["whatido-added-margin"]}>Methods</h3>
            <div className={styles["whatido-grid-three"]}>
              <div>
                <h4>A/B Testing</h4>
                <h4>Accessibility Testing</h4>
                <h4>Artefact Review</h4>
                <h4>Competitor Analysis</h4>
                <h4>Concept Usability Testing</h4>
                <h4>Contextual Inquiry</h4>
              </div>
              <div>
                <h4>Data Analytics Review</h4>
                <h4>Diary Studies</h4>
                <h4>Heuristics Evaluation</h4>
                <h4>IA: Card Sort</h4>
                <h4>IA: Tree Test</h4>
                <h4>Journey Mapping</h4>
              </div>
              <div>
                <h4>Online Surveys</h4>
                <h4>Persona Development</h4>
                <h4>Requirements Gathering</h4>
                <h4>Revised User Flows</h4>
                <h4>Stakeholder Interview</h4>
                <h4>User Interviews</h4>
              </div>
            </div>
          </div>

          <Tools />

          <div className="global-wrapper">
            <h3>Mentoring</h3>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
          </div>

          <Footer />
        </div>
    </div>
  );
}

export default WhatIDo;
