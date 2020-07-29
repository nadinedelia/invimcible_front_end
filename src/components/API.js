import React, { Component } from "react";
import store from "../config/store";
import { SPRITE_SIZE } from "../config/constants";

class API extends React.Component {

  makeRequest(number = 1) {
    // API connection code
    fetch(
      `https://cors-anywhere.herokuapp.com/https://vim-back-end.herokuapp.com/${number}`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result)
          store.dispatch({
            type: "ADD_TILES",
            payload: {
              loaded: true,
              tiles: [...result.mapArray],
              startingPoint: result.startingPoint
            },
          })
          store.dispatch({
            type: "VIM_START",
            payload: {
              canMove: true,
              position: [result.startingPoint.x * SPRITE_SIZE, result.startingPoint.y * SPRITE_SIZE],
            }
          })
          console.log(store.getState().player.position, "I am position")
        }
      );
  }
}

export default API;
