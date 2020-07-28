import React, { Component } from "react";
import store from "../config/store";

class API extends React.Component {

  makeRequest() {
    // API connection code
    fetch(
      "https://cors-anywhere.herokuapp.com/https://vim-back-end.herokuapp.com/"
    )
      .then((res) => res.json())
      .then(
        (result) => {
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
  }
}

export default API;
