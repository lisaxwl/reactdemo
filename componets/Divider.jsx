import React, { Component } from "react";
import { DatePicker, Button, Modal } from "antd";
const confirm = Modal.confirm;

class Divider extends Component {
  constructor() {
    super();
    this.state = {
      time: new Date(),
      visible: false
    };
    this.showConfirm = this.showConfirm.bind(this);
    this.showModal = this.showModal.bind(this);
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

  dateToString(d) {
    return [d.getFullYear(), d.getMonth() + 1, d.getDate()].join("-");
  }
  showModal = () => {
    this.setState({
      visible: true
    });
  };

  showConfirm() {
    confirm({
      title: "Do you Want to delete these items?",
      content: "Some descriptions",
      onOk() {
        console.log("OK");
      },
      onCancel() {
        console.log("Cancel");
      }
    });
  }

  render() {
    let { showConfirm } = this;
    let { showModal } = this;
    return (
      <div className="diveder">
        <h2>{this.dateToString(new Date())}</h2>
        <DatePicker placeholder="日期选择" />

        <Button onClick={showConfirm}>Confirm</Button>

        <h1>
          {this.state.time.toLocaleDateString()}

          {this.state.time.toLocaleTimeString()}
        </h1>

        <hr />
      </div>
    );
  }
}
export default Divider;
