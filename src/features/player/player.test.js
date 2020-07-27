import React from "react";
import getNewPosition from "./movement";
import getSpriteLocation from "./movement";
import handleMovement from "./movement";
import Player from "./index.js";

describe("Player", () => {

  xit("can move west", () => {
    const oldPos = [32, 0]
    const direction = "WEST"
    expect(getNewPosition(oldPos, direction)).toEqual([32,0])
  });

  xit("returns a sprite location", () => {
    const walkIndex = 1
    const direction = "WEST"
    expect(getSpriteLocation(direction, walkIndex)).toEqual("WEST")
  });
});
