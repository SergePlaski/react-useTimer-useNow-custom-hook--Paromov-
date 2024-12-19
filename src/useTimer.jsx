import { useLayoutEffect, useRef, useState } from "react";

// custom timer hook
export function useTimer(updateInterval, enabled, cb) {
  const cbRef = useRef(cb);
  cbRef.current = cb;
  const [now, setNow] = useState(Date.now());
  
  // this lets us avoid a brief flicker and/or displaying negative values
  useLayoutEffect(() => {
    if (!enabled) return;
    
    setNow(Date.now());
    cbRef.current?.(Date.now());
    
    const interval = setInterval(() => {
      setNow(Date.now());
      cbRef.current?.(Date.now());
    }, updateInterval);
    
    return () => {
      clearInterval(interval);
    };
  }, [updateInterval, enabled]);
  
  return now;
}