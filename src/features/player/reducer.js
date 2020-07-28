
const initialState = {
  canMove: true,
  position: [32, 32],
  spriteLocation: '0px 0px',
  direction: 'east',
  walkIndex: 0,
  script: ''
}

const playerReducer = (state=initialState, action) => {
  switch(action.type) {
    case 'MOVE_PLAYER':
      return {
        ...action.payload
      }
    case 'NO_MOVE_VIM':
      return {
        ...action.payload
      }
    case 'ADD_SCRIPT':
      return {
        ...action.payload
      }
      // [...state.script, action.newScript].join("\n")
    default:
      return state
  }
}

export default playerReducer
