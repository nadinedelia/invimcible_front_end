import React from "react";
export default function TileSprite({ image, data, position }) {
  return (
    <div
      style={{
        position: "absolute",
        height: "40px",
        width: "40px",
        backgroundImage: `url("img/Viccy_park_tiles.png")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: `-0px -0px`,
      }}
    />
  );
}

// top: position.y,
// left: position.x,
