import React, { Component } from "react";
import { Menu, Icon } from "antd";
import { Link } from "react-router-dom";
const SubMenu = Menu.SubMenu;

class MenuList extends React.Component {
  rootSubmenuKeys = ["sub1", "sub2", "sub4"];

  state = {
    openKeys: ["sub1"],
    current: "1"
  };

  onOpenChange = openKeys => {
    const latestOpenKey = openKeys.find(
      key => this.state.openKeys.indexOf(key) === -1
    );
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : []
      });
    }
  };

  render() {
    return (
      <Menu
        mode="inline"
        openKeys={this.state.openKeys}
        onOpenChange={this.onOpenChange}
      >
        <SubMenu
          key="sub1"
          title={
            <span>
              <Icon type="mail" />
              <span>Navigation One</span>
            </span>
          }
        >
          <Menu.Item key="1">
            <Link
              to={{ pathname: "/", title: "Friday" }}
              style={{ color: "black" }}
            >
              Swiper4
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/roster" style={{ color: "black" }}>
              计时器
            </Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/Communication1" style={{ color: "black" }}>
              组件通信
            </Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="/JsxComponent" style={{ color: "black" }}>
              JSX
            </Link>
          </Menu.Item>
          <Menu.Item key="5">
            <Link to="/MergeComponent" style={{ color: "black" }}>
              组件的复合
            </Link>
          </Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
}
export default MenuList;
