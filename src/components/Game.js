import React, { Component } from "react";
import axios from "axios";
import LevelRender from "./LevelRender.js";

// // processing a tile
// function MapTile(props) {
//   console.log(props)
//   return props.value;
// }
//
// // processing a row
// function MapRows(props) {
//   return props.tiles.map((tile) => <MapTile value={tile} />);
// }
//
// // processing the map
// function Map(props) {
//   return ( props.tiles.map((row) => (
//     <div>
//       <MapRows tiles={row} />
//     </div>
//   )))
// }

class Game extends React.Component {
  constructor(api = axios) {
    super();
    this.state = {
      error: null,
      isLoaded: false,
      tiles: [],
    };
    this.api = api;
    // placeholder for API response
    this.state.isLoaded = true;
    this.state.tiles = [
      ["string1", "string2"],
      ["string3", "string4"],
    ];
  }

  componentDidMount() {
    // API connection code
    //   this.api.get("/")
    //     .then((res) => res)
    //     .then(
    //       (result) => {
    //         this.setState({
    //           isLoaded: true,
    //           tiles: [...result.data.tiles],
    //         });
    //       },
    //       (error) => {
    //         this.setState({
    //           isLoaded: true,
    //           error,
    //         });
    //       }
    //     );
  }

  render() {
    const { error, isLoaded, tiles } = this.state;
    if (error) {
      // if error in connection
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      // if API hasn't returned data yet
      return <div>Loading...</div>;
    } else {
      return (
        <section>
          <LevelRender props={tiles} />
        </section>
      );
    }
  }
}

export default Game;
