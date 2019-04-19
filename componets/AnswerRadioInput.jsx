import React, { Component } from "react";
import PropTypes from "prop-types";
export default class AnsweRadioInput extends Component {
  constructor(props) {
    super(props);
    // var name = this.props.name ? this.props.name : "radio-";
    this.state = {
      checked: !this.props.checked,
      name: this.props.name
    };
    this.handleChanged = this.handleChanged.bind(this);
  }

  /**
   * proprs：组件中定义的配置对象，
   * 用来验证props的方式. 组件初始化时，如果传递的属性和propes不匹配，则会打印一个console.warn日志.
   */
  static propTypes = {
    id: PropTypes.string,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    checked: PropTypes.bool
  };

  /**
   * getDefaultProps:用来设置属性的默认值,对于每个非必须的属性，需要定义一个默认值,添加到getDefaultProps中，
   * 在每个新的实例当中，如果父组件没有提供给他们数值，这些值就会被使用。
   */
  static defaultProps = {
    checked: true
  };
  // 4.追踪当前组件的状态变更，并通过this.props.onChanged通知给父组件
  handleChanged(e) {
    var checked = e.target.checked;

    this.setState({ checked: checked });
    console.log(this.state.checked + "+++" + this.props.value);
    if (checked) {
      this.props.onChanged(this.props.value);
    }
  }

  render() {
    let { handleChanged } = this;
    return (
      <div className="radio">
        <label htmlFor={this.props.id}>
          <input
            type="radio"
            name={this.props.name}
            value={this.props.value}
            checked={this.props.checked}
            onChange={handleChanged}
          />
          {this.props.value}
        </label>
      </div>
    );
  }
}
