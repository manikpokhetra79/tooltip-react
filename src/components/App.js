import React, { Component } from 'react';
import Tooltip from './Tooltip';

export default class App extends Component {
  render() {
    return (
      <>
        <h1 className="page-headers">
          <i className="fas fa-angle-left" style={{ color: 'red' }}></i> Hey
          Folks ! This is a simple react tooltip Component{' /'}
          <i className="fas fa-angle-right" style={{ color: 'red' }}></i>
        </h1>
        <div class="tooltip-wrapper">
          <Tooltip position="left" />
        </div>
        <div class="tooltip-wrapper">
          <Tooltip position="right" />
        </div>
        <div class="tooltip-wrapper">
          <Tooltip position="top" />
        </div>
        <div class="tooltip-wrapper">
          <Tooltip position="bottom" />
        </div>
      </>
    );
  }
}
