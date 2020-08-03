import React from 'react';

export default function Home() {
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