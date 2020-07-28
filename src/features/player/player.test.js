import React from "react";
import getNewPosition from "./movement";
import getSpriteLocation from "./movement";
import handleMovement from "./movement";
import Player from "./index.js";

describe("Player", () => {

  it("can move west", () => {
    const oldPos = [32, 0]
    const direction = "WEST"
    console.log(handleMovement.getNewPosition)
    expect(getNewPosition(oldPos, direction)).toEqual(oldPos)
  });

  xit("returns a sprite location", () => {
    const walkIndex = 1
    const direction = "WEST"
    expect(getSpriteLocation(direction, walkIndex)).toEqual("WEST")
  });
});
