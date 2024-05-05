import React from 'react';
import './RegisterPage.css';

function RegisterPage() {
  return (
    <div className="register-container">
      <div className="form-container">
        <div className="register-form">
          <h1>Tactical Lab</h1>
          <form>
            <div className="name-inputs">
              <div className="input-group">
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" placeholder="Enter your first name" />
              </div>
              <div className="input-group">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" placeholder="Enter your last name" />
              </div>
            </div>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Enter your email" />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" placeholder="Enter your password" />
            </div>
            <button type="submit">Create Account</button>
            <a href="#password">Forgot Password?</a>
          </form>
        </div>
      </div>
      <div className="image-container">
        <img src="./media/stadium.jpg" alt="Background" />
      </div>
    </div>
  );
}

export default RegisterPage;
