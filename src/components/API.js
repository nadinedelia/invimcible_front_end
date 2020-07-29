import React, { Component } from "react";
import store from "../config/store";

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
              level: number,
              loaded: true,
              tiles: [...result.mapArray],
              startingPoint: result.startingPoint
            },
          })
        }
      );
  }

  makeLoadRequest(saveName) {
    // API connection code
    fetch(
      `https://cors-anywhere.herokuapp.com/https://vim-back-end.herokuapp.com/save/${saveName}`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result, 'loaded')
          // store.dispatch({
          //   type: "ADD_TILES",
          //   payload: {
          //     loaded: true,
          //     tiles: [...result.mapArray],
          //     startingPoint: result.startingPoint
          //   },
          // })
        }
      );
  }

  makePostRequest(saveName) {

  
    const level =  store.getState().map.level
    const position = store.getState().player.position

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ level, position })
    };

    console.log(requestOptions.body)
    fetch(`https://cors-anywhere.herokuapp.com/https://vim-back-end.herokuapp.com/save/${saveName}`, requestOptions)
          .then(response => response.json())
  }
}

export default API;
