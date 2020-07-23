import React from "react"

export default function Output(movement) {
  return (
    <div class="helpScreen">
      <h2>Movement:</h2>
      <ul>
        {movement.map((control) => (
          <div>{control}</div>
        ))}
      </ul>
    </div>
  )
}