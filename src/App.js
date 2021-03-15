import {
  Layout,
} from "antd";
import React from "react";
import Header from "./components/header"
import "./App.less";

const AppContainer = () => {

  return (
    <Layout>
      <Layout.Header className="header">
        <Header />
      </Layout.Header>
      <Layout.Content>
      CONTENT
      </Layout.Content>
    </Layout>
  );
};

export default AppContainer;
