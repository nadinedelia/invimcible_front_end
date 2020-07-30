const initialState = {
  tiles: [],
  loaded: false,
  level: 1
}

const mapReducer = (state=initialState, action) => {
  switch(action.type) {
    case 'UPDATE_MAP_STORE':
      return {
        ...action.payload
      }
    default:
      return state
  }
}

export default mapReducer
