import React from "react"
import "./helpScreen.css"

export default function Output(movement) {
  return (
    <div class="helpScreen">
      <h2>Movement:</h2>
      <ul>
        {movement.map((control) => (
          <div class="controls"> {control}</div>
        ))}
      </ul>
    </div>
  )
}
