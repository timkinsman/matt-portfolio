import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify } from '@fortawesome/free-brands-svg-icons'

import styles from './Spotify.module.css'

function Spotify() {
  return (
    <div className={styles.container}>
        <FontAwesomeIcon icon={faSpotify} style={{color: '#1DB954'}} />
        <span style={{padding: '0 10px'}}>Blush, Vynehall</span>
    </div>
  );
}

export default Spotify;
