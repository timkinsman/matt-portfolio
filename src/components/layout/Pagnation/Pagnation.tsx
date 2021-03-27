import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons'

import styles from './Pagnation.module.css';

import $ from 'jquery';

function Pagnation() {

  const handleOnClick = (id: string) => {
    $('html,body').animate({
        scrollTop: $(id).offset()?.top}, 'slow');
  }

  return (
    <div className={styles.container}>
        <a className={styles.icon} onClick={() => handleOnClick("#one")}><FontAwesomeIcon icon={faCircle} /></a>
        <a className={styles.icon} onClick={() => handleOnClick("#two")}><FontAwesomeIcon icon={faCircle} /></a>
        <a className={styles.icon} onClick={() => handleOnClick("#three")}><FontAwesomeIcon icon={faCircle} /></a>
        <a className={styles.icon} onClick={() => handleOnClick("#four")}><FontAwesomeIcon icon={faCircle} /></a>
        <a className={styles.icon} onClick={() => handleOnClick("#five")}><FontAwesomeIcon icon={faCircle} /></a>
        <a className={styles.icon} onClick={() => handleOnClick("#six")}><FontAwesomeIcon icon={faCircle} /></a>
    </div>
  );
}

export default Pagnation;
