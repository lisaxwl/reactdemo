import React, { Component } from "react";
import PropTypes from "prop-types";
import AnswerRadioInput from "./AnswerRadioInput";

export default class AnserMultipleChoiceQuestion extends Component {
  static propTypes = {
    value: PropTypes.string,
    choices: PropTypes.array.isRequired,
    onComplete: PropTypes.func.isRequired
  };
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value
    };
  }
  // 4.响应事件
  handleChanged(value) {
    this.setState({ value: value });
    this.props.onComplete(value); //向上传递，callback函数
  }
  renderChoices() {
    var SquareItemFactory = React.createFactory(AnswerRadioInput);
    return this.props.choices.map(
      function(choice, i) {
        return SquareItemFactory({
          key: i,
          name: "multiple-choice-" + i,
          value: choice,
          checked: this.state.value === choice,
          onChanged: this.handleChanged.bind(this)
        });
      }.bind(this)
    );
  }
  render() {
    return (
      <div className="form-group">
        <div className="survey-item-content">{this.renderChoices()}</div>
      </div>
    );
  }
}
