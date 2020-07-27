import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import './App.css';
import logo from './logo.svg';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout className="layout">
      <Header>
        <img src={logo} alt="logo" className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1" >LOAN REPAYMENT MANAGEMENT SYSTEM</Menu.Item>
          <Menu.Item key="2" style={{marginLeft: '590px'}}>Log In</Menu.Item>
          <Menu.Item key="3" style={{float: 'right'}}>| Create Account</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div className="content">Content</div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Loan repayment management system ©2020 Created by Abk</Footer>
    </Layout>
  );
}

export default App; 
