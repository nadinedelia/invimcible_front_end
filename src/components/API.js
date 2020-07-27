import React, { Component } from "react";

class API extends React.Component {
  constructor() {
    super();
    this.state = {
      error: null,
      isLoaded: false,
      tiles: [],
    };
  };

  makeRequest() {
    // API connection code
    fetch(
      "https://cors-anywhere.herokuapp.com/https://vim-back-end.herokuapp.com/"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result, "hi")
          this.state = {
            isLoaded: true,
            tiles: [...result.level1Data.mapArray],
            startingPoint: result.level1Data.startingPoint
          };
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  TileMatrix() {
    if (this.state.isLoaded === true) {
      return this.state.tiles
    } else { return "not yet"}
  }
}

export default API;
