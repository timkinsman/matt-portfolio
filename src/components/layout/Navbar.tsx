import React from 'react';

import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div style={{ display: 'flex', height: '5vh', alignItems: 'center' }}>
        <Link to="/">Matthew Kinsman</Link>

        <div style={{ marginLeft: 'auto', display: 'flex' }}>
        <div style={{ padding: '0 10px' }}>
            <Link to="/about">About</Link>
        </div>
        <div style={{ padding: '0 10px' }}>
            <Link to="/work">Work</Link>
        </div>
        </div>
    </div>
  )
}

export default Navbar;
