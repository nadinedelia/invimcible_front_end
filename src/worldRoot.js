import React, { Component } from "react";
import World from "./features/world";

function WorldRoot() {
  return (
    <div>
      <center>
        <a href="/">
          <img src={"images/logo.png"} className="logo" />
        </a>
        <World />
      </center>
    </div>
  );
}

export default WorldRoot;
