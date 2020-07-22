import React from "react";

export default function TileSprite({ tile }) {
  return (
    <div
      style={{
        position: "absolute",
        height: "32px",
        width: "32px",
        backgroundImage: `url("img/Viccy_park_tiles.png")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: `-${tile.x}px -${tile.y}px`,
      }}
    />
  );
}

// top: position.y,
// left: position.x,
