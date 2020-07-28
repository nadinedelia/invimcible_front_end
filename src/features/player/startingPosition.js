import store from "../../config/store";

var xValue = store.getState().map.startingPoint.x
var yValue = store.getState().map.startingPoint.y
console.log(xValue)
console.log(yValue)

const initialState = {
  canMove: true,
  position: [xValue, yValue],
  spriteLocation: "0px 0px",
  direction: "east",
  walkIndex: 0,
};

export default initialState;
