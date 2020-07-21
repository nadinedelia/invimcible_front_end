import React from "react";
import Actor from "../actor";
import useKeyPress from "../../hooks/use-key-press";
export default function Player({ skin }) {
  const data = {
    h: 32,
    w: 32,
  };
  const directions = {
    down: 0,
    left: 1,
    right: 2,
    up: 3,
  };
  useKeyPress((e) => {
    const dir = e.key.replace("Arrow", "").toLowerCase()
    if(directions.hasOwnProperty(dir))
    console.dir(dir)
    e.preventDefault();
  })
  return <Actor sprite={`/sprites/skins/${skin}.png`} data={data} />;
}