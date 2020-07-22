import React, { Component } from "react";
import "./map.css";
import TileSprite from "./TileRender.js";

// processing a tile
function MapTile(props) {
  switch (props.value) {
    case "string1":
      var tile = {
        x: 0 * 32,
        y: 0 * 32,
      };
      break;
    case "string2":
      var tile = {
        x: 2 * 32,
        y: 0 * 32,
      };
      break;
    case "string3":
      var tile = {
        x: 0 * 32,
        y: 2 * 32,
      };
      break;
    case "string4":
      var tile = {
        x: 2 * 32,
        y: 2 * 32,
      };
      break;
  }
  return (
    <div class="tile">
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
