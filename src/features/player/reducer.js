
const initialState = {
  canMove: false,
  position: [64, 64],
  spriteLocation: '0px 0px',
  direction: 'east',
  walkIndex: 0,
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
    case 'VIM_START':
    return {
      ...action.payload
    }
    default:
      return state
  }
}

export default playerReducer
