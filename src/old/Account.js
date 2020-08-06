import React from 'react';
// import Customer from './Customer.js';
import { Button } from 'antd';
import {
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

export default function Account() {
  let match = useRouteMatch();
  return (
    <div className="content">
      <img src="https://www.celsoftcorporation.com/photos/big/26-0-loans.jpg" width="50%" height="300px" alt="loan" />
      <div className="taskButton">
        <Button type="primary" block style={{ marginBottom: '90px' }}>
          <Link to='/Customer'>Customer</Link>
        </Button>
        <Button block style={{ marginBottom: '90px', backgroundColor: '#001529', color: 'white' }}>
          <Link to='/Loan'>Loan</Link>
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

function View() {
  let { linkId } = useParams();
  return <h1>{ linkId }</h1>
}



