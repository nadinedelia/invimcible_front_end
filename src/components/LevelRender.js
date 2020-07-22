import React, { Component } from "react";
import "./map.css";
import TileSprite from "./TileRender.js";

// processing a tile
function MapTile(props) {
  return (
    <div class="tile">
      {" "}
      <TileSprite />{" "}
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
