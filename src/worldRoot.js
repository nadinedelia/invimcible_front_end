import React, { Component, useState } from "react";
import World from "./features/world";

import VimCommand from "./components/vimCommands";
import Help from "./components/helpScreen/help";
import store from "./config/store";
import { Redirect } from "react-router-dom";
import API from "./components/API"

var api = new API

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
            return changeQuit();
          } else if (store.getState().vimCommand === ":save") {
            console.log("request made")
            api.makePostRequest("help")
            return
          } else if (store.getState().vimCommand === ":load") {
            console.log("request made")
            api.makeLoadRequest("help")
            return
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
            <h3> PLEASE PRINT SMTH </h3>
          </div>

          <div className="container-right">
            <div className="zone-container">
              {displayHelp ? <Help /> : null}
              <World />

              {displayVimCommand ? <VimCommand /> : null}
              {quit ? <Redirect to="/" /> : null}
            </div>
          </div>
        </div>
      </center>
    </div>
  );
}

export default WorldRoot;
