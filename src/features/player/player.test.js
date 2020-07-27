import React from "react";
import store from "../../config/store";
import { SPRITE_SIZE, MAP_WIDTH, MAP_HEIGHT } from "../../config/constants";
import handleMovement from "./movement.js";
import Player from "./index.js";
import { shallow } from "enzyme";

describe("Player", () => {
  it("renders without crashing", () => {
    shallow(<Player />);
  });
});
