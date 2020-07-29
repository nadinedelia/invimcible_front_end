import React from "react";
import { connect } from "react-redux";
import { SPRITE_SIZE, MAP_WIDTH, MAP_HEIGHT } from "../../config/constants";
import store from "../../config/store";
import "./styles.css";

let vimStartingPos = store.getState().player.position

function GetTileSprite(props) {
  return (
    <div className={`tile ${props.tile.value}`}
      style={{
        height: SPRITE_SIZE,
        width: SPRITE_SIZE,
        backgroundImage: `url("images/Viccy_park_tiles.png")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: `-${props.tile.x}px -${props.tile.y}px`,
      }}
    />
  );
}

function MapRow(props) {
  return (
    <div className="row">
      {props.tiles.map((tile) => (
        <GetTileSprite tile={tile} />
      ))}
    </div>
  );
}

function getVimStartPosition() {
    store.dispatch({
    type: "MOVE_PLAYER",
    payload: {
      position: [0,0],
      direction: 'east',
      walkIndex: 0,
      spriteLocation: '0px 0px',
    }
  })
  return store.getState().player.position
}

function Map(props) {
  if (props.loaded === false) {
    return "Waiting..."
  }
  console.log(store.getState().player.position, "I'm here!!!")
  getVimStartPosition()
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
