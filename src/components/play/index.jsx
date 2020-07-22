import React from "react";
import Player from "../player";
import Game from "../Game.js";

export default function Play() {
  return (
    <div className="zone-container">
      <Game />
      <Player skin="m2" />
    </div>
  );
}
