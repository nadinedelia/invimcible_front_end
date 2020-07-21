import React from "react"
import Sprite from "./components/sprite"

export default function App() {
  return (
    <div className="zone-container">
      <Sprite image={"/sprites/skins/vimBishop1.png"} data = {{
        x: 0,
        y: 0,
        w: 32,
        h: 32,
      }}
      />
    </div>
  );
}
