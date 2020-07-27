import React, { Component, PropTypes } from 'react';
import { render } from "@testing-library/react"
import "./vimCommands.css"
import { connect } from 'react-redux';
import store from "../../config/store";

export default class VimCommand extends React.Component {
  constructor () {
    super();
    this.state = {
        prefix: ':',
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
            onChange = {this.handleChange.bind(this)}
         />
      </div>
  }
}
