import React from 'react';

import { Link } from 'react-router-dom'

import styles from './Navbar.module.css';

function Navbar() {
  return (
    <div className={styles.container}>
        <Link className={styles.link} to="/">Matthew Kinsman</Link>

        <div style={{ marginLeft: 'auto', display: 'flex' }}>
            <div style={{ padding: '0 10px' }}>
                <Link className={styles.link} to="/about">About</Link>
            </div>
            <div style={{ padding: '0 10px' }}>
                <Link className={styles.link} to="/work">Work</Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar;
