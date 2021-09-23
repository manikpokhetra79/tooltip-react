import React, { Component } from 'react';
import '../stylesheets/tooltip.css';
class Tooltip extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
    };
  }
  handleMouseEnter = (val) => {
    this.setState({
      active: val,
    });
  };
  handleMouseLeave = (val) => {
    this.setState({
      active: val,
    });
  };
  render() {
    const { direction } = this.props;
    const { active } = this.state;
    return (
      <>
        <div
          className="tooltip"
          onMouseEnter={() => this.handleMouseEnter(true)}
          onMouseLeave={() => this.handleMouseLeave(false)}
        >
          {' '}
          Hi, i am a {direction} Tooltip !
          {active && (
            <span className={`tooltip-text tooltip-${direction}`}>
              Thanks for hovering. I'm a tooltip
            </span>
          )}
        </div>
      </>
    );
  }
}

export default Tooltip;
