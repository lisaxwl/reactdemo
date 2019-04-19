import React from "react";
import Subsub from "./Subsub";
import { PropTypes } from "prop-types";

class Sub extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      text: ""
    };
  }
  //父组件申明自己支持context
  static childContextTypes = {
    color: PropTypes.string,
    callback: PropTypes.func
  };
  //提供 context 中属性的 PropTypes
  static propTypes = {
    list: PropTypes.array
  };
  //父组件提供一个函数，用来返回相应的context对象
  getChildContext() {
    return {
      color: "green",
      callback: this.callback.bind(this)
    };
  }
  callback(msg) {
    console.log(msg);
    this.setState({
      text: msg
    });
  }

  render() {
    const { list } = this.props;
    return (
      <div>
        <ul>
          {list.map((entry, index) => (
            <Subsub key={`list-${index}`} value={entry.text} id={entry.id} />
          ))}
        </ul>
        {this.state.text}
      </div>
    );
  }
}
export default Sub;
