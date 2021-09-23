import React, { Component } from 'react';
import Tooltip from './components/Tooltip';

export default class App extends Component {
  render() {
    return (
      <>
        <div class="tooltip-wrapper">
          <Tooltip direction="left" />
        </div>
        <div class="tooltip-wrapper">
          <Tooltip direction="right" />
        </div>
        <div class="tooltip-wrapper">
          <Tooltip direction="bottom" />
        </div>
        <div class="tooltip-wrapper">
          <Tooltip direction="top" />
        </div>
      </>
    );
  }
}
