import React from "react"
import Actor from "../actor"
import useKeyPress from "../..hooks/use-key-press"

export default function Player({ skin }) {
  const data = {
    h: 32,
    w:32,
  };

  const directions = { 
    j: 0,
    h: 1,
    l: 2,
    k: 3,
  }

  useKeyPress((e) => {
    if (directions.hasOwnProperty())
    e.preventDefault()
  })

  return <Actor sprite={`/sprites/skins/${skin}.png`} data = {data} />;
}