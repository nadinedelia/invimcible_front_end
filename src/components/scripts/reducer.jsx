const initialState = {
    scripts: "Help Vim find his Bike"
  }
  
  const scriptReducer = (state=initialState, action) => {
    if (action.type === "ADD_SCRIPT") {
        return { ...state, scripts: action.payload }
    } else {
        return state
    }
  }
  
  export default scriptReducer
  