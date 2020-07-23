import React from "react";

export default function HelpScreenLevel1({ }) {
  const movement = [
    "h: left",
    "j: down",
    "k: up",
    "l: right",
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
