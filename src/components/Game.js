import React, { Component } from "react";
import axios from "axios";

function MapTile(props) {
  return props;
}

function MapRows(props) {
  return props.tiles.map((tile) => <MapTile value={tile} />);
}

class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      error: null,
      isLoaded: false,
      tiles: [],
    };
    this.state.isLoaded = true;
    this.state.tiles = [
      ["string1", "string2"],
      ["string3", "string4"],
    ];
    console.log(this.state.tiles);
  }

  componentDidMount() {
    // axios.get("/")
    //   .then((res) => res)
    //   .then(
    //     (result) => {
    //       this.setState({
    //         isLoaded: true,
    //         tiles: [...result.data.tiles],
    //       });
    //     },
    //     (error) => {
    //       this.setState({
    //         isLoaded: true,
    //         error,
    //       });
    //     }
    //   );
  }

  render() {
    const { error, isLoaded, tiles } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <section>
          {tiles.map((row) => (
            <MapRows tiles={row} />
          ))}
        </section>
      );
    }
  }
}

export default Game;
