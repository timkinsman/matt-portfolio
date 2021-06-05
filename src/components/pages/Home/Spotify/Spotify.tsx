import React, {useEffect, useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import styles from "./Spotify.module.css";

function Spotify() {
  const [lfmName, updateLfmName] = useState("");
  const [lfmText, updateLfmText] = useState("");
  const [sLink, updateSLink] = useState("https://open.spotify.com/track/4KdqwIpRZQPLuMtexPgvtX?si=05130ca137254815");

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

  useEffect(() => {
    fetch(`https://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&user=${process.env.REACT_APP_USERNAME}&api_key=${process.env.REACT_APP_API_KEY}&limit=1&nowplaying=true&format=json`)
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
      .catch(() => {
        console.log("error: 'Whoops! Something went wrong with Last.fm'")

        //Default
        updateLfmName("Blush")
        updateLfmText("Leon Vynehall")
      });
  }, []);

  if(lfmName && lfmText){
    return (
      <div className={styles["spotify-container"]}>
          <FontAwesomeIcon icon={faSpotify} className={styles["spotify-icon"]} />
          <h3>Currently listening to <a className="global-border-regular" href={sLink} target="_blank">{lfmName} by {lfmText}</a></h3>
      </div>
    );
  }

  return null
}

export default Spotify;
