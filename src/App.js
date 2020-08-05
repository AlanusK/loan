import React from 'react';
import { Breadcrumb, Button } from 'antd';
import './App.css';

import {
  UserOutlined,
  DollarCircleOutlined,
  CreditCardOutlined
} from '@ant-design/icons';

// const { /*Header,*/ Footer, Content } = Layout;

function App() {
  return (
    <body>
      <header className='header'>
        <Breadcrumb className='breadcrumb'>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="./appC.js">Customer</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="./appL.js">Customer View</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>Add Customer</Breadcrumb.Item>
        </Breadcrumb>
        <UserOutlined className='logo' />
      </header>

      <div className='content'>
        <Button>
          <UserOutlined className='icon' />
          <p>Customer</p>
        </Button>
        <Button>
          <DollarCircleOutlined className='icon' />
          <p>Loan</p>
        </Button>
        <Button>
          <CreditCardOutlined className='icon' />
          <p>Payment</p>
        </Button>
      </div>
      <footer>Footer</footer>
    </body>
  );
}

export default App;

