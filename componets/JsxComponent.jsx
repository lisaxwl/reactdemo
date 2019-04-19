import React, { Component } from "react";

class JsxComponent extends React.Component {
  formatName(user) {
    return user.firstName + "" + user.lastName;
  }

  render() {
    const html = "<div>HELLO&nbsp;WORLD</div>";
    const user = {
      lastName: "伟丽",
      firstName: "肖"
    };
    const element = <div tabIndex="0">作为变量引入 </div>;
    return (
      <div>
        <h1>JSX使用表达式</h1>
        <p dangerouslySetInnerHTML={{ __html: html }} />
        <div>{this.formatName(user)}</div>
        {element}
      </div>
    );
  }
}
export default JsxComponent;
