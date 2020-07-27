
import Player from "../player";
import Game from "../Game.js";
import Help from '../helpScreen/help'
import useKeyPress from "../../hooks/use-key-press";
import React, { useState } from 'react';
// import $ from 'jquery';

var vimMovement = {canMove: true}

export default function Play() {
  const [showHelp, setShowHelp] = useState(false);

    function toggleShowHelp() {
      setShowHelp(!showHelp)
     }
  
  useKeyPress((key) => {
    console.log(key.key)
    if(key.key === ':') {
      noVimMovement("canMove")
      toggleShowHelp()
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
      <div className="support-container">
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
      </div>
  );
}
