import React from "react";

const controls = [
  "h: move left",
  "j: move down",
  "k: move up",
  "l: move right",
]

export default function HelpScreen({ }) {
  const controls = [
    "h: move left",
    "j: move down",
    "k: move up",
    "l: move right",
  ]

  var output
  for(var index in controls) {
    output +=  <div> {index} - {controls[index]} </div>
  }

  return (<ul>
    {controls.map((control) => (
              <div>{control}</div>
          ))}
  </ul>)
}
