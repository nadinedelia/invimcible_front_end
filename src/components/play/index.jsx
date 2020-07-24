import React from "react";
import Player from "../player";
import Game from "../Game.js";
import useKeyPress from "../../hooks/use-key-press";

var vimMovement = {canMove: true}

export default function Play() {
  
  useKeyPress((key) => {
    console.log(key.key)
    if(key.key === ':') {
      noVimMovement("canMove")
      console.log(vimMovement, "play")
    }
  })

  function noVimMovement(canMove) {
    vimMovement[canMove] = !vimMovement[canMove]
  }
  console.log(vimMovement, "I'm outside the function")
  
  return (
    <div className="game-container">
      <div className="support-container"></div>

      <div className="container-right">
        <div className="zone-container">
          <Game />
          <Player skin="m2" vimMovement={vimMovement} />
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
