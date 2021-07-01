import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import $ from "jquery";
import styles from "./Pagnation.module.css";
import studies from "../../../studies"

function Pagnation(props: any) {
  const [current, setCurrent] = useState("#one")

  const handleOnClick = (pstrId: string) => {
    $("html,body").animate({
        scrollTop: $(pstrId).offset()?.top}, "slow");
  }
  
  const onScroll = () => {
    if(_scrollTop("#one", "#two")){
      setCurrent("#one")
      $("#root").css("background", "inherit")
    }else if(_scrollTop("#two", "#three")){
      setCurrent("#two")
      $("#root").css("background", studies[props.index[0]].color)
    }else if(_scrollTop("#three", "#four")){
      setCurrent("#three")
      $("#root").css("background", studies[props.index[1]].color)
    }else if(_scrollTop("#four", "#five")){
      setCurrent("#four")
      $("#root").css("background", studies[props.index[2]].color)
    }else if(_scrollTop("#five", "#six")){
      setCurrent("#five")
      $("#root").css("background", studies[props.index[3]].color)
    }else{
      setCurrent("#six")
      $("#root").css("background", "inherit")
    }
  }

  useEffect(() => {
    document.addEventListener("scroll", onScroll);
    return () => { window.removeEventListener("scroll", onScroll) } 
  }, [])

  const _scrollTop = (pstrId: string, pstrIdNext: string) => {
    const strDocTop = $(document).scrollTop();
    const idTop = $(pstrId).offset()?.top
    const idNextTop = $(pstrIdNext).offset()?.top
    const winHeight = $(window).height()

    if(strDocTop !== undefined && idTop !== undefined && idNextTop !== undefined && winHeight !== undefined){
      if(strDocTop >= (idTop - (winHeight / 2)) && strDocTop < (idNextTop - (winHeight / 2))){
        return true
      }
    }

    return false    
  }

  return (
    <div className={`${styles.container} global-hidden`}>
        <a style={{opacity: current == "#one" ? "1" : "0.4"}} className={styles.icon} onClick={() => handleOnClick("#one")}><FontAwesomeIcon icon={faCircle} /></a>
        <a style={{opacity: current == "#two" ? "1" : "0.4"}} className={styles.icon} onClick={() => handleOnClick("#two")}><FontAwesomeIcon icon={faCircle} /></a>
        <a style={{opacity: current == "#three" ? "1" : "0.4"}} className={styles.icon} onClick={() => handleOnClick("#three")}><FontAwesomeIcon icon={faCircle} /></a>
        <a style={{opacity: current == "#four" ? "1" : "0.4"}} className={styles.icon} onClick={() => handleOnClick("#four")}><FontAwesomeIcon icon={faCircle} /></a>
        <a style={{opacity: current == "#five" ? "1" : "0.4"}} className={styles.icon} onClick={() => handleOnClick("#five")}><FontAwesomeIcon icon={faCircle} /></a>
        <a style={{opacity: current == "#six" ? "1" : "0.4"}} className={styles.icon} onClick={() => handleOnClick("#six")}><FontAwesomeIcon icon={faCircle} /></a>
    </div>
  );
}

export default Pagnation;
