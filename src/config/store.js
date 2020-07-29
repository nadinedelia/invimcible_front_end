import { createStore, combineReducers } from 'redux'
import playerReducer from '../features/player/reducer'
import mapReducer from '../features/map/reducer'
import vimCommandReducer from '../components/vimCommands/reducer'
import scriptCommandReducer from '../components/scripts/reducer'

const rootReducer = combineReducers({
  player: playerReducer,
  map: mapReducer,
  vimCommand: vimCommandReducer,
  scripts: scriptCommandReducer
})

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

export default store
