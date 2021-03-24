import React from 'react';
import Footer from '../../layout/Footer/Footer';
import Item from '../../layout/Item/Item';
import Navbar from '../../layout/Navbar/Navbar';
import Tools from '../../layout/Tools/Tools';

import styles from "./WhatIDo.module.css";

function WhatIDo() {
  return (
    <div className={styles["whatido-container"]}>
      <div className={styles["whatido-banner"]}>
        <Navbar />
        <div style={{padding: '100px 250px 0 250px'}}>
          <p className={styles["whatido-p"]}>What I Do</p>
          <div style={{display: 'flex'}}>
            <div style={{width: '50%'}}>
              <p style={{fontSize: '24px'}}>What I Try to do</p>
              <p style={{fontSize: '16px'}}>Listen, have at least showered before my first zoom call, solve complex problems, have fun, grab the bull by the horns, question everything, create transformative and memorable experiences, enable meaningful conversations between client and their customers, tell a story, create profit for business’, communicate clearly, consider everyone for accessibility, ask the right questions, make a positive impact.</p>
            </div>
            <div style={{width: '50%'}}>
              <p style={{fontSize: '24px'}}>What I <i>Don't</i> Try to do</p>
              <p style={{fontSize: '16px'}}>Make assumptions, ask leading questions, use too many buzzwords, go (way) over budget, abbreviate things, bite off more than I can chew, worry about success, let my OCD perfectionist traits seap in, spend too much time in figma, add to the world’s noise.</p>
            </div>
          </div>

          <div>
            <p style={{fontSize: '24px'}}>Principles</p>
            <div className={styles["whatido-wrap"]}>
              <Item header="Be curious" content="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using content here." footer=""/>
              <Item header="First proactive, then reative" content="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'," footer=""/>
              <Item header="Systems thinking" content="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution. The point of using Lorem Ipsum." footer=""/>
              <Item header="Deliver real value" content="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English." footer=""/>
              <Item header="Collaboration" content="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution." footer=""/>
              <Item header="Validation is essential" content="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using content here." footer=""/>
            </div>
          </div>

          <div>
            <p style={{fontSize: '24px'}}>Process</p>
            <div className={styles["whatido-wrap"]}>
              <Item header="1. Plan" content="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using content here." footer=""/>
              <Item header="2. Research" content="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English." footer=""/>
              <Item header="3. Analyse" content="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution." footer=""/>
              <Item header="4. Design" content="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution." footer=""/>
              <Item header="5. Launch" content="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using content here." footer=""/>
              <Item header="6. Evaluate" content="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using content." footer=""/>
            </div>
          </div>

          <div>
            <p style={{fontSize: '24px'}}>Methods</p>
            <div style={{display: 'flex'}}>
              <div>
                <p style={{fontSize: '20px'}}>A/B Testing</p>
                <p style={{fontSize: '20px'}}>Accessibility Testing</p>
                <p style={{fontSize: '20px'}}>Artefact Review</p>
                <p style={{fontSize: '20px'}}>Competitor Analysis</p>
                <p style={{fontSize: '20px'}}>Concept Usability Testing</p>
                <p style={{fontSize: '20px'}}>Contextual Inquiry</p>
              </div>
              <div>
                <p style={{fontSize: '20px'}}>Data Analytics Review</p>
                <p style={{fontSize: '20px'}}>Diary Studies</p>
                <p style={{fontSize: '20px'}}>Heuristics Evaluation</p>
                <p style={{fontSize: '20px'}}>IA: Card Sort</p>
                <p style={{fontSize: '20px'}}>IA: Tree Test</p>
                <p style={{fontSize: '20px'}}>Journey Mapping</p>
              </div>
              <div>
                <p style={{fontSize: '20px'}}>Online Surveys</p>
                <p style={{fontSize: '20px'}}>Persona Development</p>
                <p style={{fontSize: '20px'}}>Requirements Gathering</p>
                <p style={{fontSize: '20px'}}>Revised User Flows</p>
                <p style={{fontSize: '20px'}}>Stakeholder Interview</p>
                <p style={{fontSize: '20px'}}>User Interviews</p>
              </div>
            </div>
          </div>

          <div>
            <p style={{fontSize: '24px'}}>Tools</p>
            <Tools />
          </div>

          <div>
            <p style={{fontSize: '24px'}}>Mentoring</p>
            <p style={{fontSize: '16px'}}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
}

export default WhatIDo;
