import React from "react";
import Map from "../map";
import Player from "../player";
import "./world.css";
import API from "../../components/API";
// import store from "../../config/store";

var api = new API();
api.makeRequest();

function World(props) {
  return (
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
