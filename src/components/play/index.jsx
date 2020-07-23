import React from "react";
import Player from "../player";
import Game from "../Game.js";

export default function Play() {
  return (
    <div className="game-container">
      <div className="support-container"></div>

      <div className="container-right">
        <div className="zone-container">
          <Game />
          <Player skin="m2" />
          <br></br>
          <br></br>
          <div className="input-container">
          <form class="hidden">
            <input type="text"></input>
          </form>
          </div>
        </div>
      </div>
    </div>
  );
}
