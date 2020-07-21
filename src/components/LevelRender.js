import React, { Component } from "react";

// processing a tile
function MapTile(props) {
  console.log(props)
  return props.value;
}

class LevelRender extends React.Component {
  constructor(props) {
    super();
    console.log(props, 2)
    this.tiles = props
    console.log(this.tiles, 1)
  }

  // processing a row
  MapRows(props) {
    console.log(props, 5)
    return props.tiles.map((tile) => <MapTile value={tile} />);
  }

  // processing the map
  render() {
    console.log(this.tiles)
    return ( this.tiles.props.map((row) => (
      <div>
        <this.MapRows tiles={row} />
      </div>
    )));
  };
}

export default LevelRender
