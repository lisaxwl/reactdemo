import React, { Component } from "react";
import PropTypes from "prop-types";
import "../src/styles.css";

/**
 *  show={this.state.show} :bool,是否显示
    name="弹框"  //弹框名称
    text="提示"  //内容
    commitAction={this.commitAction.bind(this)} //确认Action
    closeAlert={this.closeAlert.bind(this)}  //取消Action
 */
export default class AlertComponet extends Component {
  static propTypes = {
    name: PropTypes.string,
    text: PropTypes.string,
    closeAlert: PropTypes.func,
    commitAction: PropTypes.func,
    show: PropTypes.bool
  };

  /**默认state */
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      text: "",
      show: false
    };
  }

  // 关闭弹框
  confirm = () => {
    this.props.commitAction();
  };
  cancel = () => {
    this.props.closeAlert();
  };

  render() {
    return (
      <div
        className="alert_moudel"
        style={this.props.show ? { display: "block" } : { display: "none" }}
      >
        <h1 className="alert_title">{this.props.name}</h1>
        <p className="alert_content">{this.props.text}</p>
        <div className="button_group">
          <button onClick={this.cancel.bind(this)}>取消</button>
          <button onClick={this.confirm.bind(this)} className="alert_confirm">
            确定
          </button>
        </div>
      </div>
    );
  }
}
