import React from 'react';
import { Layout, Menu, Breadcrumb, Button } from 'antd';
import './App.css';
import logo from './logo.svg';

const { Header, Content, Footer } = Layout;

function App() {

  return (
    // {WELCOME PAGE}
    <Layout className="layout">
      <Header>
        <img src={logo} alt="logo" className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['3']}>
          <Menu.Item key="1">LOAN REPAYMENT MANAGEMENT SYSTEM</Menu.Item>
          <Menu.Item key="2" style={{ float: 'right' }}>| Create Account</Menu.Item>
          <Menu.Item key="3" style={{ float: 'right' }}>Log Out</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>About</Breadcrumb.Item>
          <Breadcrumb.Item>Contact</Breadcrumb.Item>
        </Breadcrumb>
        <div className="content">
          <img src="https://www.celsoftcorporation.com/photos/big/26-0-loans.jpg" width="50%" height="300px" alt="loan" />
          <div className="taskButton">
            <Button type="primary" block style={{marginBottom: '90px'}}>
              Customer
            </Button>
            <Button block style={{marginBottom: '90px', backgroundColor: '#001529', color: 'white'}}>Loan</Button>
            <Button type="primary" block >
              Payment
            </Button>
          </div>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Loan repayment management system ©2020 Created by Abk</Footer>
    </Layout>
  );
}

export default App;