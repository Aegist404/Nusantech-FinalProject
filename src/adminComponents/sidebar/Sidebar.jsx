// import React from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';

const { Header, Content, Sider } = Layout;

const items1 = ['1', '2', '3'].map((key) => ({
  key,
  label: `nav ${key}`,
}));

const items2 = [
  {
    key: 'sub1',
    icon: <LaptopOutlined />,
    label: 'Dashboard',
  },
  {
    key: 'sub2',
    icon: <UserOutlined />,
    label: 'Pelatihan Saya',
  },
  {
    key: 'sub3',
    icon: <NotificationOutlined />,
    label: 'Sertifikat',
  },
  {
    key: 'sub4',
    icon: <NotificationOutlined />,
    label: 'Payment History',
  },
  {
    key: 'sub5',
    icon: <UserOutlined />,
    label: 'Akun',
  },
];

const Sidebar = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div className="demo-logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
      </Header>
      <Layout>
        <Sider width={200} style={{ background: colorBgContainer }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
            items={items2}
          />
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content style={{ padding: 24, margin: 0, minHeight: 280, background: colorBgContainer }}>
            Content
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Sidebar;
