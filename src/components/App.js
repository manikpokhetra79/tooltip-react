import React, { Component } from 'react';
import Tooltip from './Tooltip';

export default class App extends Component {
  render() {
    return (
      <>
        <h1 className="page-headers">
          Hello Folks, this is a React tooltip Component
        </h1>
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
