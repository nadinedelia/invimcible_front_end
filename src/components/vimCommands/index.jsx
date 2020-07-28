import React from "react"
import { render } from "@testing-library/react"
import "./vimCommands.css"
export default class VimCommand extends React.Component {
  constructor () {
    super();
    this.state = {
        prefix: ':'
    }
  }
  handleChange(e) {
    console.log(e.target.value)
    // on hold until redux is up and running
    // if (e.target.value === ':h'){
    //   toggleShowHelp()
    // } 
    };
    render () {
      return <div className= "vimBox">
          <input
            type="text"
            defaultValue={this.state.prefix}
            value = {this.state.value}
            onChange = {this.handleChange}
         />
      </div>
  }
}
