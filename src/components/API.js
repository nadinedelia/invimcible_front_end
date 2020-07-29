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
              loaded: true,
              tiles: [...result.mapArray],
              startingPoint: result.startingPoint
            },
          })
        }
      );
  }

  makePostRequest() {

    const data = { 
      level: store.getState().map.level,
      postion: store.getState().player.postion
      }

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ data })
    };
    fetch(`https://cors-anywhere.herokuapp.com/https://vim-back-end.herokuapp.com/`, requestOptions)
          .then(response => response.json())
  }
}

export default API;
