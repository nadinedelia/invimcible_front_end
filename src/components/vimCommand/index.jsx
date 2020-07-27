import React from "react"
import { render } from "@testing-library/react"
import "./vimCommand.css"

export default class VimCommand extends React.Component {

    render () {
      return <div class= "vimBox">
          <input
            type="text"
            value=":"
         />
      </div>

}
}