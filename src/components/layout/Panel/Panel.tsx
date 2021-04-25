import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Panel.module.css';

//import arrow from '../../../images/arrow-down.svg'

import $ from 'jquery'

function Panel(props: any) {
  /*const handleOnClick = (id: string) => {
    $('html,body').animate({
        scrollTop: $(id).offset()?.top}, 'slow');
  }*/

  const handleOnMouseMove = (e: any) => {
    const width = $(`#${props.id}-image`).width()
    const height = $(`#${props.id}-image`).height()
    if(width && height){
      $(`#${props.id}-image`).css({left: e.clientX - (width / 2), top: e.clientY - (height / 2)});
    }
  }

  const handleOnMouseOver = (e: any) => {
    const width = $(`#${props.id}-image`).width()
    const height = $(`#${props.id}-image`).height()
    if(width && height){
      $(`#${props.id}-image`).css({opacity: "1", visibility: 'visible', zIndex: 1, left: e.clientX - (width / 2), top: e.clientY - (height / 2)});
    }
  }

  const handleOnMouseOut = (e: any) => {
    const width = $(`#${props.id}-image`).width()
    const height = $(`#${props.id}-image`).height()
    if(width && height){
      $(`#${props.id}-image`).css({opacity: "0", visibility: 'hidden', zIndex: -1, left: e.clientX - (width / 2), top: e.clientY - (height / 2)});
    }
  }

  return (
    <React.Fragment>
      <div className={styles["panel-container"]} style={{background: props.study.color, position: 'relative'}} id={props.id}>
        <div className="global-main-container" style={{display: 'flex', alignItems: 'flex-end', flexDirection: 'row', paddingBottom: '60px'}}>
          <div className={styles["panel-img-container"]} onMouseMove={handleOnMouseMove} onMouseOver={handleOnMouseOver} onMouseOut={handleOnMouseOut} />
          <div style={{zIndex: 100}}>
              <h4>{props.study.title}</h4>
              <h1 className={styles["panel-left-slogan"]}>{props.study.slogan}</h1>
              <h4><Link className="global-border-thin" to={{pathname: '/study', hash: `#${props.study.redirect}`, state: { study: props.study }}}>View case study →</Link></h4>
          </div>
          {/*<div className={styles["panel-arrow"]}>
            <a onClick={() => handleOnClick(`#${props.next}`)}><img src={arrow} /></a>
          </div> I like these*/}
        </div>
      </div>
      <img id={`${props.id}-image`} className={styles["panel-img"]} src={props.study.img} alt="image"></img>
    </React.Fragment>
  );
}

export default Panel;