import {useState} from "react"
// import tileMartix from ....

export default function useWalk(maxSteps) {
  const [position, setPosition] = useState({x: 0, y: 0});
  const [dir, setDir] = useState(0)

  const [step, setStep] = useState(0)

  const directions = {
    j: 0,
    h: 1,
    l: 2,
    k: 3,
  };

  const stepSize = 16;

  const modifier = {
    j: { x: 0, y: stepSize },
    h: { x: -stepSize, y: 0 },
    l: { x: stepSize, y: 0 },
    k: { x: 0, y: -stepSize },
  };

  function walk(dir) {
    setDir(prev => {
      if(directions[dir] === prev) move(dir);
      return directions[dir];
    })
    setStep(prev => prev < maxSteps -1 ? prev
      + 1 : 0)

  }

  function move(dir) {
    // check if position free based on tileMartix
    setPosition(prev => ({
      x: prev.x + modifier[dir].x,
      y: prev.y + modifier[dir].y,
    }))
  }

  return {
    walk, dir, step, position,
  }

}
