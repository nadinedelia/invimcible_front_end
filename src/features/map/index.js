import React from "react";
import { connect } from "react-redux";
import { SPRITE_SIZE, MAP_WIDTH, MAP_HEIGHT } from "../../config/constants";

import "./styles.css";

function getTileSprite(type) {
  console.log(type)
  switch (type) {
    case "F1":
      return "grass";
    // case 'Something':
    //   return "walkable-tree";
    // case 'Something':
    //   return "chest";
    case "B":
      return "rock";
    // case 'Something':
    //   return "tree";
    default:
      console.log("No tiles");
  }
}

function MapTile(props) {
  return (
    <div
      className={`tile ${getTileSprite(props.tile)}`}
      style={{
        height: SPRITE_SIZE,
        width: SPRITE_SIZE,
      }}
    />
  );
}

function MapRow(props) {
  console.log(props, "Hello!")
  return (
    <div className="row">
      {props.tiles.map((tile) => (
        <MapTile tile={tile} />
      ))}
    </div>
  );
}

function Map(props) {
  console.log(props, "map")
  if (props.loaded === false) {
    return "Waiting..."
  }
  console.log(props, "Hello!")
  return (
    <div
      style={{
        position: "relative",
        top: "0px",
        left: "-32px",
        width: MAP_WIDTH,
        height: MAP_HEIGHT,
        backgroundColor: "#42b842",
        border: "4px solid white",
      }}
    >
      {props.tiles.map((row) => (
        <MapRow tiles={row} />
      ))}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    tiles: state.map.tiles,
  };
}

export default connect(mapStateToProps)(Map);
