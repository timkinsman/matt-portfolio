import React from 'react';

import { Link } from 'react-router-dom'

import styles from './Navbar.module.css';

function Navbar() {
  return (
    <div className={styles["navbar-container"]}>
        <Link className={styles["navbar-link"]}  to="/">Matthew Kinsman</Link>

        <div className={styles["navbar-right"]}>
            <Link className={styles["navbar-link"]} to="/work">Work</Link>
            <Link className={styles["navbar-link"]} to="/about">About Me</Link>
            <Link className={styles["navbar-link"]} to="/whatido">What I Do</Link>
            <Link className={styles["navbar-link"]} to="/blog">Stuff</Link>
            <Link className={styles["navbar-link"]} to="/contact">Contact</Link>
        </div>
    </div>
  )
}

export default Navbar;
