import React, { Component, useState } from "react";
import World from "./features/world";
import VimCommand from "./components/vimCommands"
import Help from './components/helpScreen/help'
import store from "./config/store";

var vimMovement = {canMove: true}

function WorldRoot() {

  const [showHelp, setShowHelp] = useState(false);
  const [displayVimCommand, setShowVimCommand] = useState(false);

  function toggleShowHelp() {
    setShowHelp(!showHelp)
   }
   function toggleShowVimCommand() {
    setShowVimCommand(true)
   }

   function handleKeyDown(e) {
     if(e.key === ':') {
       showVimCommand()
     } else if (e.key === 'Escape') {
       removeVimCommand()
     }
   }
   function removeVimCommand() {
      noVimMovement("canMove")
      setShowVimCommand(false)

  }
  window.addEventListener("keydown", (e) => {
    handleKeyDown(e);
    console.log(e.key)
  });

function showVimCommand() {
    noVimMovement("canMove")
    toggleShowVimCommand()
}

function noVimMovement(canMove) {
  vimMovement[canMove] = !vimMovement[canMove]
}
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
            { showHelp ? <Help /> : null }
              <World />
              { displayVimCommand ? <VimCommand /> : null }
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

export default WorldRoot;
