import React, {useEffect, useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import styles from "./Spotify.module.css";

const userName=""
const apiKey=""

function Spotify() {
  const [lfmData, updateLfmData] = useState<any>({});

  useEffect(() => {
    fetch(`https://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&user=${userName}&api_key=${apiKey}&limit=1&nowplaying=true&format=json`)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('error');
      })
      .then(data => {console.log(data); updateLfmData(data.recenttracks.track[0])})
      .catch(() =>
        updateLfmData({ error: 'Whoops! Something went wrong with Last.fm' })
      );
  }, []);

  return (
    <div className={styles["spotify-container"]}>
        <FontAwesomeIcon icon={faSpotify} className={styles["spotify-icon"]} />
        <h3 className={styles["spotify-text"]}>Currently listening to <a className="global-border-thin">{lfmData.name}, {lfmData.artist["#text"]}</a></h3>
    </div>
  );
}

export default Spotify;
