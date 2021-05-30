import React, { useEffect, useRef } from 'react'
import { withRouter } from "react-router-dom";

const usePrevious = (value: any) => {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  });
  
  return ref.current;
}

const ScrollToTop = (props:any) => {
  const previousLocation = usePrevious(window.location)

  useEffect(() => {
    if (props.location !== previousLocation) {
      window.scrollTo(0, 0)
    }
  }, [previousLocation])
    
  return props.children
}

export default withRouter(ScrollToTop)