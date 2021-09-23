import React, { Component } from 'react';
import '../stylesheets/tooltip.css';
class Tooltip extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isHovered: false,
    };
  }
  handleMouseEnter = (val) => {
    this.setState({
      isHovered: val,
    });
  };
  handleMouseLeave = (val) => {
    this.setState({
      isHovered: val,
    });
  };
  render() {
    const { position } = this.props;
    const { isHovered } = this.state;
    return (
      <>
        <div
          className="tooltip"
          onMouseEnter={() => this.handleMouseEnter(true)}
          onMouseLeave={() => this.handleMouseLeave(false)}
        >
          Hi, i am a {position} Tooltip !
          <span
            style={{ visibility: isHovered ? 'visible' : 'hidden' }}
            className={`tooltip-text tooltip-${position}`}
          >
            Thanks for hovering! I'm a tooltip
          </span>
        </div>
      </>
    );
  }
}

export default Tooltip;
