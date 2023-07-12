import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Layout, Menu } from "antd";
import HeaderLayout from "../../components/layout/Header";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;

function DefaultLayout () {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minWidth: 450 }}>
      <Sider className="default-layout-sider" trigger={null} collapsible collapsed={collapsed}>
        <div>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}
        </div>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'nav 1',
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: 'nav 2',
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: 'nav 3',
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          style={{ position: "fixed", zIndex: 1, width: "100%", background: "#fff" }}
        >
          <HeaderLayout />
        </Header>
        <Content
          className="content-layout-wrapper"
          style={{ padding: "0 16px", marginTop: 64 }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}

export default DefaultLayout