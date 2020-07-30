import React from "react"
import store from "../../config/store"
// import HelpScreen from "./helpScreen.jsx"
import HelpScreenLevel1 from "./helpScreenLevel1.jsx"
import HelpScreenLevel2 from "./helpScreenLevel2.jsx"
// import { render } from "@testing-library/react"

export default class Help extends React.Component {
  getLevel() {
    return store.getState().map.level
  }
    render () {
      if(this.getLevel() === 1) {
      return <HelpScreenLevel1 />
      } else {
        return <HelpScreenLevel2 />
      }
}
}