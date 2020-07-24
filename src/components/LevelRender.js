import React, { Component } from "react";
import "./play/play.css";
import TileSprite from "./TileRender.js";

// processing a tile
function MapTile(props) {
  // switch (props.value) {
  //   case "B":
  //     var tile = {
  //       x: 0 * 32,
  //       y: 0 * 32,
  //     };
  //     break;
  //   case "F1":
  //     var tile = {
  //       x: 1 * 32,
  //       y: 1 * 32,
  //     };
  //     break;
  //   case "I3":
  //     var tile = {
  //       x: 0 * 32,
  //       y: 2 * 32,
  //     };
  //     break;
  //   case "P3":
  //     var tile = {
  //       x: 2 * 32,
  //       y: 2 * 32,
  //     };
  //     break;
  // }
  var tile = {
    x: 2 * 32,
    y: 2 * 32,
  };
  return (
    <div class="tile">
      {" "}
      <TileSprite tile={tile} />
    </div>
  );
}

class LevelRender extends React.Component {
  constructor(props) {
    super();
    this.tiles = props;
  }

  // processing a row
  MapRows(props) {
    return (
      <div class="row">
        {props.tiles.map((tile) => (
          <MapTile value={tile} />
        ))}
      </div>
    );
  }

  // processing the map
  render() {
    return (
      <div class="map">
        {this.tiles.props.map((row) => (
          <this.MapRows tiles={row} />
        ))}
      </div>
    );
  }
}

export default LevelRender;
