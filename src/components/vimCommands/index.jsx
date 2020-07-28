import React, { Component, PropTypes, useImperativeHandle } from 'react';
import { render } from "@testing-library/react"
import "./vimCommands.css"
import { connect } from 'react-redux';
import store from '../../config/store';

export default class VimCommand extends React.Component {
  constructor () {
    super();
    this.state = {
        prefix: ':',
        value: null
    }
  }

  handleChange(e) {
    const inputs = { type: "ADD_LETTER", letters: e.target.value }
    return store.dispatch(inputs);
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
