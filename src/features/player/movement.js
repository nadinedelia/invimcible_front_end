import store from "../../config/store";
import { SPRITE_SIZE, MAP_WIDTH, MAP_HEIGHT } from "../../config/constants";
import API from "../../components/API"
import React, { Component, useState } from "react";

export default function handleMovement(player) {

  let canMove = true

  function getNewPosition(oldPos, direction) {
    console.log(SPRITE_SIZE)
    switch (direction) {
      case "WEST":
        return [oldPos[0] - SPRITE_SIZE, oldPos[1]];
      case "EAST":
        return [oldPos[0] + SPRITE_SIZE, oldPos[1]];
      case "NORTH":
        return [oldPos[0], oldPos[1] - SPRITE_SIZE];
      case "SOUTH":
        return [oldPos[0], oldPos[1] + SPRITE_SIZE];
      default:
        console.log(direction);
    }
  }

  function getSpriteLocation(direction, walkIndex) {
    switch (direction) {
      case "SOUTH":
        return `${SPRITE_SIZE * walkIndex}px ${SPRITE_SIZE * 0}px`;
      case "EAST":
        return `${SPRITE_SIZE * walkIndex}px ${SPRITE_SIZE * 2}px`;
      case "WEST":
        return `${SPRITE_SIZE * walkIndex}px ${SPRITE_SIZE * 3}px`;
      case "NORTH":
        return `${SPRITE_SIZE * walkIndex}px ${SPRITE_SIZE * 1}px`;
      default:
        console.log(direction);
    }
  }
  
  function getWalkIndex() {
    const walkIndex = store.getState().player.walkIndex;
    return walkIndex >= 2 ? 0 : walkIndex + 1;
  }

  function observeBoundaries(oldPos, newPos) {
    return (
      newPos[0] >= 0 &&
      newPos[0] <= MAP_WIDTH - SPRITE_SIZE &&
      newPos[1] >= 0 &&
      newPos[1] <= MAP_HEIGHT - SPRITE_SIZE
    );
  }

  function observeImpassable(oldPos, newPos) {
    const tiles = store.getState().map.tiles;
    const y = newPos[1] / SPRITE_SIZE;
    const x = newPos[0] / SPRITE_SIZE;
    const nextTile = tiles[y][x];
    return nextTile != 'B';
  }

  function dispatchMove(direction, newPos, moveAbilty) {
    const walkIndex = getWalkIndex();
    store.dispatch({
      type: "MOVE_PLAYER",
      payload: {
        position: newPos,
        direction: direction,
        walkIndex: walkIndex,
        spriteLocation: getSpriteLocation(direction, walkIndex),
      },
    });
    checkPositionEnd(newPos)
  }

  function checkPositionEnd(location) {
    const tiles = store.getState().map.tiles;
    const y = location[1] / SPRITE_SIZE;
    const x = location[0] / SPRITE_SIZE;
    console.log(x,y)
    console.log(tiles[y][x])
    if (tiles[y][x].value === "E") {
      console.log("end tile")
      removeTileData()
      loadLevel(2)
    }
  }

  function removeTileData() {
    store.dispatch({
      type: "REMOVE_DATA",
      payload: {
        loaded: false,
        tiles: [],
        startingPoint: null
      },
    })
  }

  function loadLevel(number) {
    var api = new API
    api.makeRequest(number)
  }

 function VimCantMove() {
   canMove = false
 }

 function VimMoves() {
  canMove = true
}

  // toggle movement changes true/false

  function attemptMove(direction) {
    
    const oldPos = store.getState().player.position;
    const newPos = getNewPosition(oldPos, direction);

    if (observeBoundaries(oldPos, newPos) && observeImpassable(oldPos, newPos) && canMove){
      dispatchMove(direction, newPos);
    }
  }

  function handleKeyDown(e) {
    if(canMove == true) e.preventDefault();

    switch (e.key) {
      case 'h':
        return attemptMove("WEST");
      case 'k':
        return attemptMove("NORTH");
      case 'l':
        return attemptMove("EAST");
      case 'j':
        return attemptMove("SOUTH");
      case 'Escape':
        return VimMoves()
      case ':':
        return VimCantMove()
      default:
        return
    }
  }

  window.addEventListener("keydown", (e) => {
    handleKeyDown(e);
  });

  return player;
}
