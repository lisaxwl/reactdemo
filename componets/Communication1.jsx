import React, { Component } from "react";
import ChildComponent1 from "./ChildComponent1";
import Sub from "./Sub";
import { PropTypes } from "prop-types";

const list = [{ text: "题目一", id: 1 }, { text: "题目二", id: 2 }];

class Communication1 extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      isShowList3: false
    };
  }

  showConponent = () => {
    this.setState({
      isShowList3: true
    });
  };
  hideConponent = () => {
    this.setState({
      isShowList3: false
    });
  };
  render() {
    return (
      <div>
        <strong>1.子-父组件通信</strong>
        <br />
        <button onClick={this.showConponent}>我是父组件: 显示Lists组件</button>
        {this.state.isShowList3 ? (
          <ChildComponent1 hideConponent={this.hideConponent} />
        ) : null}
        <br />
        <br />

        <h2>
          <strong>跨级组件通信</strong>
          <br />
          1.中间件组件层层传递props
          <br />
          2. 使用 context对象，
          <br />
          &nbsp;&nbsp;1).上级组件要申明自己支持context,
          并提供一个函数来返回相应的context对象；
          <br />
          &nbsp;&nbsp;2).子组件要申明自己需要使用context
          <Sub list={list} />
        </h2>
      </div>
    );
  }
}
export default Communication1;
