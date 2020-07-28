import React, { Component, PropTypes, useImperativeHandle } from 'react';
import { render } from "@testing-library/react"
import store from '../../config/store';

export default class Scripts extends React.Component {
  constructor () {
    super();
    this.state = {
        prefix: ':',
        value: null
    }
  }

  getScripts() {
      return store.getState().player.script
  }

    render () {
      return <div className= "script">
          WORK!!!!!!
      </div>
  }
}
