import React, { Component, useState } from "react";
import World from "./features/world";
import Scripts from "./components/scripts/index"
import VimCommand from "./components/vimCommands";
import Help from "./components/helpScreen/help";
import store from "./config/store";
import { Redirect } from "react-router-dom";
import { Provider } from 'react-redux';

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
        if (store.getState().vimCommand === ":" || store.getState().vimCommand.input === "") {
          setShowHelp(false);
          return setShowVimCommand(false);
        } else { return }
      case "Enter":
        if (displayVimCommand) {
          if (store.getState().vimCommand === ":h") {
            return setShowHelp(true);
          } else if (store.getState().vimCommand === ":q") {
            return changeQuit();
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
    <Provider store={store}>
    <div className="super-container">
      <center>
        <a href="/">
          <img src={"images/logo.png"} className="logo2" />
        </a>
        <div className="game-container">
          <div className="support-container">
            <Scripts/>
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
    </Provider>
  );
}

export default WorldRoot;
