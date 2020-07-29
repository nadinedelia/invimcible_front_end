import React, { Component } from "react";
import store from "../config/store";

class API extends React.Component {

  makeRequest() {
    // API connection code
    fetch(
      "https://cors-anywhere.herokuapp.com/https://vim-back-end.herokuapp.com/1"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result.startingPoint)
          store.dispatch({
            type: "ADD_TILES",
            payload: {
              loaded: true,
              tiles: [...result.mapArray],
            }
          })
        }
      );
  }
}

export default API;
