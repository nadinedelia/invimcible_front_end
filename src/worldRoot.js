import React, { Component, useState } from "react";
import World from "./features/world";

import VimCommand from "./components/vimCommands";
import Help from "./components/helpScreen/help";
import store from "./config/store";
import { Redirect } from "react-router-dom";

function WorldRoot() {
  const [quit, setQuit] = useState(false);
  const [displayHelp, setShowHelp] = useState(false);
  const [displayVimCommand, setShowVimCommand] = useState(false);

  function toggleShowVimCommand() {
    setShowVimCommand(true);
  }

  function handleKeyDown(e) {
    switch (e.key) {
      case ":":
        return toggleShowVimCommand();
      case "Backspace":
        console.log(store.getState().vimCommand);
        if (store.getState().vimCommand === ":") {
          setShowHelp(false);
          return setShowVimCommand(false);
        }
      case "Enter":
        if (displayVimCommand) {
          if (store.getState().vimCommand === ":h") {
            return setShowHelp(true);
          } else if (store.getState().vimCommand === ":q") {
            changeQuit();
          }
        }
    }
  }

  function changeQuit() {
    setQuit(true);
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
            {displayHelp ? <Help /> : null}

            <br></br>

            {displayVimCommand ? <VimCommand /> : null}
            {quit ? <Redirect to="/" /> : null}
          </div>
          <div className="container-right">
            <World />
          </div>
        </div>
      </center>
    </div>
  );
}

export default WorldRoot;
