import React, { Component, PropTypes, useImperativeHandle } from 'react';
import store from '../../config/store';

export default class Scripts extends React.Component {
  constructor() {
    super()
    }

  getScript() {
    return "Hello"
  }

}
