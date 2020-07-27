import React, { Component, PropTypes } from 'react';
import { render } from "@testing-library/react"
import "./vimCommands.css"
import { connect } from 'react-redux';

export default class VimCommand extends React.Component {
  constructor () {
    super();
    this.state = {
        prefix: ':',
        value: ":"
    }
  }


  getVimCommand() {
    console.log(this.state.value)
    return this.state.value
  }

  handleChange(e = null) {
    this.setState({value: e.target.value});
    };
    render () {
      return <div className= "vimBox">
          <input
            type="text"
            defaultValue={this.state.prefix}
            value={this.state.password}
            onChange = {this.handleChange.bind(this)}
         />
      </div>
  }
}
