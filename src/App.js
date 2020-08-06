import React from 'react';
import { Button } from 'antd';

import {
  UserOutlined,
  DollarCircleOutlined,
  CreditCardOutlined
} from '@ant-design/icons';


function App() {
  return (
    <body>
      <header className='header'>
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

