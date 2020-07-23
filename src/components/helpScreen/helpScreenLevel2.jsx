import React from "react";

export default function HelpScreenLevel2({ }) {
  const movement = [
    "h: left",
    "j: down",
    "k: up",
    "l: right",
    "w: beginning of next word",
    "b: beginning of previous word",
  ]

  return (
    <div>
    <h2>Movement:</h2>
    <ul>
      {movement.map((control) => (
        <div>{control}</div>
      ))}
    </ul>
    </div>
  )
}