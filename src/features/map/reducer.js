const initialState = {
  tiles: [],
  loaded: false
}

const mapReducer = (state=initialState, action) => {
  switch(action.type) {
    case 'ADD_TILES':
      return {
        ...action.payload
      }

    case 'REMOVE_DATA':
      return {
        ...action.payload
      }
    default:
      return state
  }
}

export default mapReducer
