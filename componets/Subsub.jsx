import React from "react";
import PropTypes from "prop-types";
export default class Subsub extends React.Component {
  //子组件需要声明自己需要使用 context，
  static contextTypes = {
    color: PropTypes.string,
    callback: PropTypes.func
  };

  //提供其需要使用的 context 属性的 PropTypes
  static propTypes = {
    value: PropTypes.string,
    id: PropTypes.number
  };

  render() {
    const { value } = this.props;
    const { id } = this.props;
    console.log(value);
    const cb = msg => {
      return () => {
        this.context.callback(msg);
      };
    };
    return (
      <li
        style={{ color: this.context.color }}
        onClick={cb("我又回来啦！！+++" + value + "---" + id)}
      >
        {value} ++ {id} ---- 点我
      </li>
    );
  }
}
