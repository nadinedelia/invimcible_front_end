import React, { Component } from "react";
import store from "../config/store";

class API extends React.Component {

  makeRequest(number = 1) {
    // API connection code
    fetch(
      `https://cors-anywhere.herokuapp.com/https://vim-back-end.herokuapp.com/2`
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
}

export default API;
