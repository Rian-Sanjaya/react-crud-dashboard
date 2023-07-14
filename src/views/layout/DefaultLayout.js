import React, { useState, useEffect } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
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
  const navigate = useNavigate();
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  const [currentMenu, setCurrentMenu] = useState(location.pathname)

  useEffect(() => {
    if (location) {
      if (currentMenu !== '/nav_3' && currentMenu !== location.pathname) {
        setCurrentMenu(location.pathname)
      }
    }
  }, [location, currentMenu])

  const onMenuClick = (e) => {
    setCurrentMenu(e.key);

    if (e.key === '/') {
      navigate('/');
    } else if (e.key === '/user') {
      navigate('/user');
    }
  }

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
          onClick={onMenuClick}
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['/']}
          selectedKeys={[currentMenu]}
          items={[
            {
              key: '/',
              icon: <VideoCameraOutlined />,
              label: 'Komoditas',
            },
            {
              key: '/user',
              icon: <UserOutlined />,
              label: 'User',
            },
            {
              key: '/nav_3',
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