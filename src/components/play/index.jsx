import VimCommand from "../vimCommand"
import Player from "../player";
import Game from "../Game.js";
import Help from '../helpScreen/help'
import useKeyPress from "../../hooks/use-key-press";
import React, { useState } from 'react';
// import $ from 'jquery';

var vimMovement = {canMove: true}

export default function Play() {
  const [showHelp, setShowHelp] = useState(false);
  const [showVimCommand, setShowVimCommand] = useState(false);

    function toggleShowHelp() {
      setShowHelp(!showHelp)
     }

     function toggleShowVimCommand() {
      setShowVimCommand(true)
     }

     useKeyPress((key) => {
      console.log(key.key)
      if(key.key === 'Escape') {
        noVimMovement("canMove")
        setShowVimCommand(false)
      }
    })
  
  useKeyPress((key) => {
    console.log(key.key)
    if(key.key === ':') {
      noVimMovement("canMove")
      toggleShowVimCommand()
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
          { showVimCommand ? <VimCommand /> : null }
          <br></br>
        </div>
      </div>
      </div>
      </div>
  );
}
