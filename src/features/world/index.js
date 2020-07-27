import React from "react";
import Map from "../map";
import Player from "../player";
import "./world.css";
import API from "../../components/API"

// import { tiles } from "../../maps/Level_1";
import store from "../../config/store";

var api = new API
api.makeRequest()


function World(props) {
  // console.log(api.TileMatrix())
  store.dispatch({
    type: "ADD_TILES",
    payload: {
      tiles: api.TileMatrix(),
    },
  });

  return (
    // console.log(this, "return world"),
    <div
      style={{
        position: "relative",
        width: "800px",
        height: "480px",
        margin: "20px",
      }}
    >
      <Map />
      <Player />
    </div>
  );
}

export default World;
