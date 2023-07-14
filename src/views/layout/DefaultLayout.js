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
  PieChartOutlined,
  MailOutlined,
  AppstoreOutlined,
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem('Komoditas', '/', <PieChartOutlined />),
  getItem('User', '/user', <UserOutlined />),
  getItem('Navigation One', 'sub1', <MailOutlined />, [
    getItem('Option 5', '5'),
    getItem('Option 6', '6'),
    getItem('Option 7', '7'),
    getItem('Option 8', '8'),
  ]),
  getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
    getItem('Submenu', 'sub3', null, [getItem('Option 11', '11'), getItem('Option 12', '12')]),
  ]),
];

function DefaultLayout () {
  const navigate = useNavigate();
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  const [currentMenu, setCurrentMenu] = useState(location.pathname);

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
          items={items}
          // items={[
          //   {
          //     key: '/',
          //     icon: <VideoCameraOutlined />,
          //     label: 'Komoditas',
          //   },
          //   {
          //     key: '/user',
          //     icon: <UserOutlined />,
          //     label: 'User',
          //   },
          //   {
          //     key: '/nav_3',
          //     icon: <UploadOutlined />,
          //     label: 'nav 3',
          //   },
          // ]}
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