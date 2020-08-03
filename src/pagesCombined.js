import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import './App.css';
import logo from './logo.svg';


// For Log In form
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";


const { Header, Content, Footer } = Layout;

export default function App() {
  return (
    // {WELCOME PAGE}
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

function Home() {
  return (
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

  );
}

function Account() {
  let match = useRouteMatch();
  return (
    <div className="content">
      <img src="https://www.celsoftcorporation.com/photos/big/26-0-loans.jpg" width="50%" height="300px" alt="loan" />
      <div className="taskButton">
        <Button type="primary" block style={{ marginBottom: '90px' }}>
          <Link to={`${match.url}/customer`}>Customer</Link>
        </Button>
        <Button block style={{ marginBottom: '90px', backgroundColor: '#001529', color: 'white' }}>
          <Link to={`${match.url}/loan`}>Loan</Link>
        </Button>
        <Button type="primary" block >
          <Link to={`${match.url}/payment`}>Payment</Link>
        </Button>

        <Switch>
          <Route path={`${match.path}/:linkId`} >
            <View />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

function LogIn() {
  const onFinish = values => {
    console.log('Received values of form: ', values);
  };
  return (
    <div className="content">
      <img src="https://www.celsoftcorporation.com/photos/big/26-0-loans.jpg" width="50%" height="300px" alt="loan" />

      {/* Login form codes */}
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your Username!',
            },
          ]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href="./forgotPasswordPage.js">
            Forgot password
              </a>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log In
            </Button>
            Or <a href="./createAccountPage.js">Create Account!</a>
        </Form.Item>
      </Form>

    </div>
  );
}


function View() {
  let { linkId } = useParams();
  return (
  <h2>{linkId}</h2>
  );
}

