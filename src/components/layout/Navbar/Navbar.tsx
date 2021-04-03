import React from 'react';

import { Link } from 'react-router-dom'

import styles from './Navbar.module.css';

function Navbar(props: any) {
  return (
    <div className={styles["navbar-container"]}>
        <Link className={props.selected === "home" ? styles["navbar-selected"] : styles["navbar-link"]}  to="/">Matthew Kinsman</Link>

        <div className={styles["navbar-right"]}>
            <Link className={props.selected === "work" ? styles["navbar-selected"] : styles["navbar-link"]} to="/work">Work</Link>
            <Link className={props.selected === "about" ? styles["navbar-selected"] : styles["navbar-link"]} to="/about">About me</Link>
            <Link className={props.selected === "whatido" ? styles["navbar-selected"] : styles["navbar-link"]} to="/whatido">What I do</Link>
            {/*<Link className={props.selected === "stuff" ? styles["navbar-selected"] : styles["navbar-link"]} to="/blog">Stuff</Link>*/}
            <Link className={props.selected === "contact" ? styles["navbar-selected"] : styles["navbar-link"]} to="/contact">Contact</Link>
        </div>
    </div>
  )
}

export default Navbar;
