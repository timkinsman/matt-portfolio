import React, {useEffect, useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import styles from "./Spotify.module.css";

function Spotify() {
  const [lfmName, updateLfmName] = useState("Blush");
  const [lfmText, updateLfmText] = useState("Vynehall");

  useEffect(() => {
    fetch(`https://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&user=${process.env.USERNAME}&api_key=${process.env.API_KEY}&limit=1&nowplaying=true&format=json`)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('error');
      })
      .then(data => {
        updateLfmName(data.recenttracks.track[0].name)
        updateLfmText(data.recenttracks.track[0].artist["#text"])
      })
      .catch(() =>
        console.log("error: 'Whoops! Something went wrong with Last.fm'")
      );
  }, []);

  return (
    <div className={styles["spotify-container"]}>
        <FontAwesomeIcon icon={faSpotify} className={styles["spotify-icon"]} />
        <h3 className={styles["spotify-text"]}>Currently listening to <a className="global-border-thin">{lfmName}, {lfmText}</a></h3>
    </div>
  );
}

export default Spotify;
