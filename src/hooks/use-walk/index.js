import {useState} from "react"

export default function useWalk(maxSteps) {
  const [dir, setDir] = useState(0)

  const [step, setStep] = useState(0)
  
  const directions = {
    j: 0,
    h: 1,
    l: 2,
    k: 3,
  };

  function walk(dir) {
    setDir(directions[dir]) 
    setStep(prev => prev < maxSteps -1 ? prev 
      + 1 : 0)

  }

  return {
    walk, dir, step, directions
  }

}