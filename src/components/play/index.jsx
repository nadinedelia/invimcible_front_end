import React from "react";
import Player from "../player";
import Game from "../Game.js";

export default function Play() {
  return (
    <div className="super-container">
      <center>
        <img src={"images/logo.png"} className="logo2" />
        <div className="game-container">
          <div className="support-container"></div>

          <div className="container-right">
            <div className="zone-container">
              <Game />
              <Player skin="m2" />
              <br></br>
              <br></br>
              <div className="speech-container">
                <p> PLEASE PRINT SMTH </p>
              </div>
            </div>
          </div>
        </div>
      </center>
    </div>
  );
}
