const initialState = {
  scripts:
    "Vim has just had his haircut and is ready to cycle home looking fresh-fresh. But wait...\n\nVim: ?? I thought I left my bike tied up here. Maybe I left it over there…\n\n"
};

const scriptReducer = (state = initialState, action) => {
  if (action.type === "ADD_SCRIPT") {
    return { ...state, scripts: action.payload };
  } else {
    return state;
  }
};

export default scriptReducer;
