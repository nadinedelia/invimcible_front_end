import React, { Component } from "react";
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
  constructor() {
    super();
    this.state = {
      error: null,
      isLoaded: false,
      tiles: [],
      showHelp: false,
      tiles: [
      ['B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B'],
        ['B', 'VS', 'F1', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B','B'],
        ['B', 'F1', 'F1', 'F1', 'F1', 'F1', 'F1', 'F1', 'I1', 'F1', 'F1', 'F1', 'F1', 'F1', 'E', 'B', 'B', 'B', 'B', 'B', 'B', 'B','B'],
        ['B', 'F1', 'F1', 'B', 'B', 'B', 'B', 'B', 'B', 'P1', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B','B'],
        ['B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B','B'],
        ['B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B','B'],
        ['B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B','B'],
        ['B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B','B'],
        ['B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B','B'],
        ['B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B','B'],
        ['B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B','B'],
        ['B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B','B'],
        ['B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B','B']
    ]
    };
    // placeholder for API response
    // this.state.isLoaded = true;
    // this.state.tiles = [
    //   ["string1", "string2"],
    //   ["string3", "string4"],
    // ];
  }

  togglePopup() {
    this.setState({
      showHelp: !this.state.showHelp
    });
  }

  // componentDidMount() {
  //   // API connection code
  //   fetch(
  //     "https://cors-anywhere.herokuapp.com/https://vim-back-end.herokuapp.com/"
  //   )
  //     .then((res) => res.json())
  //     .then(
  //       (result) => {
  //         this.setState({
  //           isLoaded: true,
  //           tiles: [...result.level1],
  //         });
  //         console.log(this.state.tiles);
  //       },
  //       (error) => {
  //         this.setState({
  //           isLoaded: true,
  //           error,
  //         });
  //       }
  //     );
  // }


  render() {
    const { error, isLoaded, tiles } = this.state;
      return (
        <section>
          <LevelRender props={tiles} />
        </section>
      );
    }
  }


export default Game;
