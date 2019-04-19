import React, { Component } from "react";
import AnserMultipleChoiceQuestion from "../componets/AnswerMultipleChoiceQuestion";
import AlertComponet from "../componets/AlertComponet";

export default class MergeComponent extends Component {
  //在构造函数中对状态赋初始值
  constructor(props) {
    super(props);
    this.state = {
      weather: "",
      show: false
    };
  }

  handleComplete = value => {
    this.setState({ weather: value });
  };

  open = () => {
    this.setState({ show: true });
  };

  /*获取子组件传递过来的值*/
  closeAlert = () => {
    //取消Action
    this.setState({
      show: false
    });
    console.log("执行取消Action");
  };
  commitAction = () => {
    //确认Action
    this.setState({
      show: false
    });
    console.log("执行确认Action");
  };
  render() {
    const choices = ["雷阵雨", "多云转晴", "晴转阵雨", "多云"];
    return (
      <div>
        <h1>组件的复合</h1>
        <p>
          通过小巧、简单的组件和数据对象，构造大而复杂的组件，
          react信奉可组合性，可以混合搭配各种子组件构成复杂且强大的新组建。
          <br />
          特别看下负责渲染一个选择题并获取用户答案的 组件
        </p>
        <p>今天天气:{this.state.weather}</p>
        <AnserMultipleChoiceQuestion
          choices={choices}
          onComplete={this.handleComplete.bind(this)}
        />
        <br />
        <button onClick={this.open.bind(this)}>开启宝藏</button>
        <AlertComponet
          show={this.state.show}
          name="信息确认"
          text="开启宝藏吗?"
          commitAction={this.commitAction.bind(this)}
          closeAlert={this.closeAlert.bind(this)}
        />
      </div>
    );
  }
}
