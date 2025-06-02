import { useEffect } from "react";
 export function  ReactUseEffect() {
useEffect(() => {
  const timer = setInterval(() => {
    console.log("Running...");
  }, 10000);

  // Cleanup on unmount
  return () => {
    clearInterval(timer);
  };
}, []);

 }
 