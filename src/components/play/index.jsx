import React from "react";
import Player from "../player";
import Game from "../Game.js";
import Help from '../helpScreen/help'
import useKeyPress from "../../hooks/use-key-press";
// import $ from 'jquery';

var vimMovement = {canMove: true}

export default function Play() {
  
  useKeyPress((key) => {
    console.log(key.key)
    if(key.key === ':') {
      noVimMovement("canMove")
      // makeVisible('input-form')
    }
  })

  function noVimMovement(canMove) {
    vimMovement[canMove] = !vimMovement[canMove]
  }

  // function makeVisible(id) {
  //   $(`${id}`).attr('class', 'visible');
  // }

  // function makeInvisible(id) {
  //   $(`${id}`).attr('class', 'hidden');
  // }


  return (
    <div className="game-container">
      <div className="support-container">
      <div className="container-right">
        <div className="zone-container">
          <Game />
          <Player skin="m2" vimMovement={vimMovement} />
          <br></br>
          <br></br>
          <div className="input-container">
          <Help level = '1' display = {vimMovement['canMove']} />
          </div>
          </div>
        </div>
      </div>
      </div>
  );
}
