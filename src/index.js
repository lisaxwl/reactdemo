import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { Layout, Menu, Icon } from "antd";
import SwiperComponent from "../componets/SwiperComponent";
import Divider from "../componets/Divider";
import MenuList from "../componets/MenuList";
// import Sub from "../componets/SubComponent";
import Communication1 from "../componets/Communication1";
import JsxComponent from "../componets/JsxComponent";
import MergeComponent from "../componets/MergeComponent";

import "antd/dist/antd.css";

const { Footer, Content, Sider } = Layout;

/**
 * 页面路由定义
 */
const Home = () => (
  <div>
    <div>
      <Route exact path="/" component={SwiperComponent} />
      <Route path="/roster" component={Divider} />
      <Route path="/Communication1" component={Communication1} />
      <Route path="/JsxComponent" component={JsxComponent} />
      <Route path="/MergeComponent" component={MergeComponent} />
    </div>
  </div>
);
/**
 * 页面路由定义 end
 */

// const callback = msg => {
//   console.log(msg);
//   <div>time: msg</div>;
// };

/**
 * 页面主体部分布局左（菜单列表），右（主体内容），页面底部footer
 */
const App = () => (
  <div className="App">
    <Layout>
      <Content>
        <Layout>
          <Sider theme="light">
            <MenuList />
          </Sider>
          <Content
            style={{ padding: "0 24px", minHeight: 680, background: "#fff" }}
          >
            <Home />
          </Content>
        </Layout>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  rootElement
);
