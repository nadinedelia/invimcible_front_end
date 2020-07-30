const initialState = {

  }
  
  const vimCommandReducer = (state=initialState, action) => {
    switch(action.type) {
      case 'ADD_LETTER':
        return action.letters
      default:
        return state
    }
  }
  
  export default vimCommandReducer
  