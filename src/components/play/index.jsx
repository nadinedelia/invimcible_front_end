import React from "react";

import model from "../somewhere";
import DisplayLevel from "somewhereElse"

async function apiConnection()
  CONNECT TO THE API
  currentLevelTiles = tileMartix{tilesFromAPI}
}
// .then(
  model.placeVim(x, y) // puts the connect starting location - x,y for Vim based on the tilesFromAPI
// )
// .then( // ** worried about the game trying to display before the apiConnection happens...
export default function Play() { // this is acting as our game loop

  model.listenForKeys()
  // using key press hooks - to update Vim - x, y location, sprite to show
  // so code in Player but not the return


  if (model.isColonPress()) {
    // display colon interactions
  }

  return (
    <div className="super-container">
      <center>
        <img src={"images/logo.png"} className="logo2" />
        <div className="game-container">
          <div className="support-container">
            <h3> PLEASE PRINT SMTH </h3>
          </div>

          <div className="container-right">
            <div className="zone-container">
              // <DisplayColonStuff links to the if statement on line 19 />
              // <DisplayLevel levelmap={ arguments } VimSprite={ argumets }
              // *** So return of Actor and Sprite and also the return from tileMartix ***
              // />

              <br></br>
              <br></br>
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
// )
