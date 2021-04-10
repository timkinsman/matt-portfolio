import React, { useEffect, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons'

import styles from './Pagnation.module.css';

import $ from 'jquery';

function Pagnation() {
  const [current, setCurrent] = useState("#one")

  const handleOnClick = (id: string) => {
    $('html,body').animate({
        scrollTop: $(id).offset()?.top}, 'slow');
  }
  
  const onScroll = () => {
    if(_scrollTop("#one", "#two")){
      setCurrent("#one")
    }else if(_scrollTop("#two", "#three")){
      setCurrent("#two")
    }else if(_scrollTop("#three", "#four")){
      setCurrent("#three")
    }else if(_scrollTop("#four", "#five")){
      setCurrent("#four")
    }else if(_scrollTop("#five", "#six")){
      setCurrent("#five")
    }else{
      setCurrent("#six")
    }
  }

  useEffect(() => {
    document.addEventListener('scroll', onScroll);

    return () => { window.removeEventListener('scroll', onScroll) } 
  }, [])

  const _scrollTop = (id: string, idNext: string) => {
    const strDocTop = $(document).scrollTop();
    const idTop = $(id).offset()?.top
    const idNextTop = $(idNext).offset()?.top

    if(strDocTop !== undefined && idTop !== undefined && idNextTop !== undefined){
      if(strDocTop >= idTop && strDocTop < idNextTop){
        return true
      }
    }

    return false    
  }

  return (
    <div className={styles.container}>
        <a style={{opacity: current == "#one" ? "1" : "0.4"}} className={styles.icon} onClick={() => handleOnClick("#one")}><FontAwesomeIcon icon={faCircle} /></a>
        <a style={{opacity: current == "#two" ? "1" : "0.4"}} className={styles.icon} onClick={() => handleOnClick("#two")}><FontAwesomeIcon icon={faCircle} /></a>
        <a style={{opacity: current == "#three" ? "1" : "0.4"}} className={styles.icon} onClick={() => handleOnClick("#three")}><FontAwesomeIcon icon={faCircle} /></a>
        <a style={{opacity: current == "#four" ? "1" : "0.4"}} className={styles.icon} onClick={() => handleOnClick("#four")}><FontAwesomeIcon icon={faCircle} /></a>
        <a style={{opacity: current == "#five" ? "1" : "0.4"}} className={styles.icon} onClick={() => handleOnClick("#five")}><FontAwesomeIcon icon={faCircle} /></a>
        <a style={{opacity: current == "#six" ? "1" : "0.4"}} className={styles.icon} onClick={() => handleOnClick("#six")}><FontAwesomeIcon icon={faCircle} /></a>
    </div>
  );
}

export default Pagnation;
