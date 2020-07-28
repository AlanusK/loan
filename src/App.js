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
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['3']}>
          <Menu.Item key="1">LOAN REPAYMENT MANAGEMENT SYSTEM</Menu.Item>
          <Menu.Item key="2" style={{ float: 'right' }}>| Create Account</Menu.Item>
          <Menu.Item key="3" style={{ float: 'right' }}>Log In</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>About</Breadcrumb.Item>
          <Breadcrumb.Item>Contact</Breadcrumb.Item>
        </Breadcrumb>
        <div className="content">
          <img src="https://www.celsoftcorporation.com/photos/big/26-0-loans.jpg" width="40%" height="300px" alt="loan" />
          <div className="welcome">
            <h1 style={{ color: 'darkslategray' }}>Welcome to Loan management system</h1>
            <div style={{ float: 'right' }}>
              <p>Please log In to continue!</p>
              <p>Or Create Account if you are a new user.</p>
            </div>
          </div>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Loan repayment management system ©2020 Created by Abk</Footer>
    </Layout>
  );
}

export default App; 
