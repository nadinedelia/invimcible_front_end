import React from "react";
import Player from "../player";
import Game from "../Game.js";
import API from "../API.js"

var api = new API()
api.makeRequest()

setTimeout(function (){

console.log(api.TileMatrix(), "delay")
  // Something you want delayed.

}, 5000)
console.log(api.TileMatrix(), "no delay")

export default function Play() {

  return (
    <div className="super-container">
      <center>
        <a href="/">
          <img src={"images/logo.png"} className="logo2" />
        </a>
        <div className="game-container">
          <div className="support-container">
            <h3> PLEASE PRINT SMTH </h3>
          </div>

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
