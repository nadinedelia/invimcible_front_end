import React from "react";
import Actor from "../actor";
import useKeyPress from "../../hooks/use-key-press";
import useWalk from "../../hooks/use-walk";

export default function Player({ skin, vimMovement }) { 
  const { dir, step, walk, position } = useWalk(3)
  const data = {
    h: 32,
    w: 32,
  };

  useKeyPress((e) => {
    const result = e.key.replace("Key", "").toLowerCase()
    console.log(vimMovement, "player")
    if((result === "h" || result === "j" || result === "k" || result === "l") && vimMovement) {
    walk(result) 
    console.log(result)
    e.preventDefault();
    }
  })

  return (
  <Actor 
  sprite={`/sprites/skins/${skin}.png`} 
  data={data} 
  step={step} 
  dir={dir}
  position={position}
  />
  );
}