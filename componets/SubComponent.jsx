import React, { Component } from "react";

class SubComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date()
    };
    this.onChange = this.onChange.bind(this);

    /*更新时间*/
    setInterval(
      function() {
        this.setState({
          time: new Date()
        });
      }.bind(this),
      1000
    );
  }

  onChange(event) {
    return this.props.callback(event);
  }
  render() {
    let { onChange } = this;
    let clock = this.state.time.toLocaleTimeString();
    return (
      <div>
        <input
          type="text"
          onChange={onChange(this.state.time.toLocaleTimeString())}
          value={clock}
        />
      </div>
    );
  }
}

export default SubComponent;
