import React, { Component } from "react";
import store from "../config/store";

class API extends React.Component {

  makeRequest(number = 1) {
    // API connection code
    if (number === 1) {
      fetch(
        "https://cors-anywhere.herokuapp.com/https://vim-back-end.herokuapp.com/"
      )
        .then((res) => res.json())
        .then(
          (result) => {
            console.log(result.level1Data)
            store.dispatch({
              type: "ADD_TILES",
              payload: {
                loaded: true,
                tiles: [...result.level1Data.mapArray],
                startingPoint: result.level1Data.startingPoint
              },
            })
          }
        );
    } else if (number === 2) {
      fetch(
        "https://cors-anywhere.herokuapp.com/https://vim-back-end.herokuapp.com/"
      )
        .then((res) => res.json())
        .then(
          (result) => {
            console.log(result.level1Data)
            store.dispatch({
              type: "ADD_TILES",
              payload: {
                loaded: true,
                tiles: [...result.level2Data.mapArray],
                startingPoint: result.level2Data.startingPoint
              },
            })
          }
        );
    }
  }
}

export default API;
