const initialState = {
  position: [32, 32],
  spriteLocation: "0px 0px",
  direction: "east",
  walkIndex: 0,
};

const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_PLAYER_STORE":
      return {
        ...action.payload,
      };
    case 'VIM_START':
      return {
        ...action.payload
      }
      // [...state.script, action.newScript].join("\n")
    default:
      return state;
  }
};

export default playerReducer;
