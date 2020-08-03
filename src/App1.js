import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import './App.css';
import logo from './logo.svg';
import Home from './Home.js';
import Account from './Account.js';
import LogIn from './LogIn.js';
import Customer from './Customer.js';
import Loan from './Loan.js';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Router>
      <Layout className="layout">
        <Header>
          <img src={logo} alt="logo" className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1"><Link to="/">LOAN REPAYMENT MANAGEMENT SYSTEM</Link></Menu.Item>
            <Menu.Item key="2" style={{ float: 'right' }}><Link to="/Account">| Create Account</Link></Menu.Item>
            <Menu.Item key="3" style={{ float: 'right' }}><Link to="/LogIn">Log In</Link></Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>About</Breadcrumb.Item>
            <Breadcrumb.Item>Contact</Breadcrumb.Item>
          </Breadcrumb>
          <Switch>
            <Route path="/Account">
              <Account />
            </Route>
            <Route path="/LogIn">
              <LogIn />
            </Route>
            <Route path="/Customer">
              <Customer />
            </Route>
            <Route path="/Loan">
              <Loan />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Loan repayment management system ©2020 Created by Abk</Footer>
      </Layout>
    </Router>
  );
}

export default App;
