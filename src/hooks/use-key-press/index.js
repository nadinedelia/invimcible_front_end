import {useEffect} from "react";
export default function useKeyPress(fn) {
  useEffect(() => {
    window.addEventListener('keydown', fn);
    console.log(fn)
    return () => {
      window.removeEventListener('keydown', fn);
    };
  }, [fn]);
}