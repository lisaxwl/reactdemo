import React, { Component } from "react";
import PropTypes from "prop-types";

class ChildComponent1 extends Component {
  static propTypes = {
    hideConponent: PropTypes.func.isRequired
  };
  render() {
    return (
      <div>
        哈哈,我是子组件List3
        <button onClick={this.props.hideConponent}>隐藏List3组件</button>
      </div>
    );
  }
}

export default ChildComponent1;
