import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import './App.css';
import logo from './logo.svg';

// For Log In form
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

// For Welcome page
const { Header, Content, Footer } = Layout;

function App() {
  const onFinish = values => {
    console.log('Received values of form: ', values);
  };

  return (
    // {WELCOME PAGE}
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
      </Content>
      <Footer style={{ textAlign: 'center' }}>Loan repayment management system ©2020 Created by Abk</Footer>
    </Layout>
  );
}

export default App;
