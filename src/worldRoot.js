import React, { Component } from "react";
import World from "./features/world";

function WorldRoot() {
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
              <World />
            </div>
          </div>
        </div>
      </center>
    </div>
  );
}

export default WorldRoot;
