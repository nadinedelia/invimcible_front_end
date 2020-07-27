import { useState } from "react";

export default function useWalk(maxSteps) {
  const [position, setPosition] = useState({ x: 800, y: 300 });
  const [dir, setDir] = useState(0);

  const [step, setStep] = useState(0);

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
    setDir((prev) => {
      if (
        directions[dir] === prev &&
        modifier[dir].y + position.y < 540 &&
        modifier[dir].y + position.y > 139 &&
        modifier[dir].x + position.x < 1082 &&
        modifier[dir].x + position.x > 351
      )
        console.log(dir, "dir")
        console.log(modifier[dir].y, "modifier[dir].y")
        console.log(modifier[dir].x, "modifier[dir].x")
        console.log(position.y, "position.y")
        console.log(position.x, "position.x")
        move(dir);
      return directions[dir];
    });
    setStep((prev) => (prev < maxSteps - 1 ? prev + 1 : 0));
  }

  function isBlocked(dir) {
    return true;
  }

  function move(dir) {
    setPosition((prev) => ({
      x: prev.x + modifier[dir].x,
      y: prev.y + modifier[dir].y,
    }));
  }

  return {
    walk,
    dir,
    step,
    position,
  };
}
