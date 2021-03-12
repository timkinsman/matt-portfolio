import React, {useEffect, useState} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify } from '@fortawesome/free-brands-svg-icons'

import styles from './Spotify.module.css'

import axios from 'axios';

function Spotify() {
  /*useEffect(() => {
    axios.post(  
      'https://accounts.spotify.com/api/token',
      new URLSearchParams({
        grant_type: "client_credentials"
      }).toString(),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'Basic ' + "YjllZDg4NmY1MzkxNDVlMWIxYTFhODlkZDQyYTc3NTU6MDQ2NTM0OWZjYzMwNGRlYjkzN2NmM2Y1ZDY1ODI5ZGM="
        },
      }
    ).then(function (response) {
      console.log(response.data.access_token);
  }, [])*/

  return (
    <div className={styles["spotify-container"]}>
        <FontAwesomeIcon icon={faSpotify} style={{color: '#1DB954'}} />
        <span className={styles["spotify-span"]}><span>Currently listening to, </span><span className={styles["spotify-current"]}>Blush, Vynehall</span></span>
    </div>
  );
}

export default Spotify;
