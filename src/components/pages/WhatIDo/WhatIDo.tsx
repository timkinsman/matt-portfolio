import React from "react";
import Footer from "../../layout/Footer/Footer";
import Item from "../../layout/Item/Item";
import Navbar from "../../layout/Navbar/Navbar";
import Tools from "../../layout/Tools/Tools";
import { arrResearchMethods } from "../../../tagging/researchMethods";
import { Link } from "react-router-dom";

import styles from "./WhatIDo.module.css";
import images from "../../../images/Emojis"

function WhatIDo() {
  const renderResearchMethods = (parrstrResearchMethods: Array<string>) => {
    return parrstrResearchMethods.map((pstrResearchMethod) => {
      return <h4>{pstrResearchMethod}</h4>
    })
  }

  return (
    <div className="global-fadein">
      <div className="global-main-container">
        <Navbar selected="whatido" />
        <div className="global-container">
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
            <h3>Principles</h3>
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
            <h3>Process</h3>
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
            <h3>Research Methods & Workshops</h3>
            <div className={styles["whatido-grid-three-no-row-gap"]}>
              {renderResearchMethods(arrResearchMethods)}
            </div>
          </div>

          <Tools />

          <Footer />
        </div>
      </div>
    </div>
  );
}

export default WhatIDo;
