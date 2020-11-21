import React from 'react';

import { Link } from 'react-router-dom'

import styles from './Navbar.module.css';

function Navbar() {
  return (
    <div className={styles.container}>
        <Link className={styles.link} to="/">Matthew Kinsman</Link>

        <div style={{ marginLeft: 'auto', display: 'flex' }}>
            <div style={{ padding: '0 20px' }}>
                <Link className={styles.link} to="/work">Work</Link>
            </div>
            <div style={{ padding: '0 20px' }}>
                <Link className={styles.link} to="/about">About Me</Link>
            </div>
            <div style={{ padding: '0 20px' }}>
                <Link className={styles.link} to="/whatido">What I Do</Link>
            </div>
            <div style={{ padding: '0 20px' }}>
                <Link className={styles.link} to="/blog">Blog</Link>
            </div>
            <div style={{ padding: '0 20px' }}>
                <Link className={styles.link} to="/contact">Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar;
