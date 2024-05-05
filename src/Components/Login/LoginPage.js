import React from 'react';
import './LoginPage.css';

function LoginPage() {
  return (
    <div className="login-container">
      <div className="form-container">
      <div className="login-form">
        <h1>Tactical Lab</h1>
        <form>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email" />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter your password" />
          <button type="submit">Log in</button>
          <a href="#password">Forgot Password?</a> 
          </form>
        </div>

      </div>
      <div className="image-container">
        <img src="./media/login.jpg" alt="Background" />
      </div>
    </div>
  );
}

export default LoginPage;
