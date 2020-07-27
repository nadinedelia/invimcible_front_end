import React from "react";
import "./helpScreen.css";

export default function Output(movement) {
  return (
    <div className="helpScreen">
      <h2>Movement:</h2>
      <ul>
        {movement.map((control) => (
          <div className="controls"> {control}</div>
        ))}
      </ul>
    </div>
  );
}
