import React, { Component, useState } from "react";
import World from "./features/world";
import VimCommand from "./components/vimCommands"
import Help from './components/helpScreen/help'
import store from "./config/store";

function WorldRoot() {

  const [displayHelp, setShowHelp] = useState(false);
  const [displayVimCommand, setShowVimCommand] = useState(false);

   function toggleShowVimCommand() {
    setShowVimCommand(true)
   }

   function handleKeyDown(e) {
     switch (e.key) {
      case ":":
        return toggleShowVimCommand()
      case "Escape": 
        setShowHelp(false)
        return setShowVimCommand(false)
      case "Enter":
        if (displayVimCommand) {
          if (store.getState().vimCommand === ":h") {
            return setShowHelp(true)
          }
        }
    }
  }

  window.addEventListener("keydown", (e) => {
    handleKeyDown(e);
  });

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
              { displayHelp ? <Help /> : null}
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
