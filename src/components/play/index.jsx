import React from "react";
import Player from "../player";
import Game from "../Game.js";
import Help from '../helpScreen/help'
import useKeyPress from "../../hooks/use-key-press";
// import $ from 'jquery';

var vimMovement = {canMove: true}

export default function Play() {
    let showHelp = true


  function togglePopup() {
    showHelp = !showHelp
    }
  
  useKeyPress((key) => {
    console.log(key.key)
    if(key.key === ':') {
      noVimMovement("canMove")
      togglePopup()
      console.log("help", showHelp)
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
      <div className="support-container"></div>
      <div className="container-right">
        <div className="zone-container">
        { showHelp ? <Help /> : null }
          <Game />
          <Player skin="m2" vimMovement={vimMovement} />
          <br></br>
          <br></br>
        </div>
      </div>
    </div>
  );
}
