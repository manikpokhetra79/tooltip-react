import React, { Component } from 'react';
class Tooltip extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: true,
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
          {active && (
            <span className={`tooltip-text tooltip-${direction}`}>
              Hi, i am a {direction} Tooltip !
            </span>
          )}
        </div>
      </>
    );
  }
}

export default Tooltip;
