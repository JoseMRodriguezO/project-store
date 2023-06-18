import React from "react";
import "./signin.css";
export const SignIn = () => {
  return (
    <div className="wrapper">
      <h2>Signup</h2>
      <ul></ul>
      <form>
        <div className="input-box">
          <label>Email:</label>
          <input className="email" type="email" />
        </div>
        <div className="input-box">
          <label>Address:</label>
          <input className="address" type="text" />
        </div>
        <div className="input-box">
          <label>Phone:</label>
          <input className="phone" type="tel" />
        </div>
        <div className="input-box">
          <label>Password:</label>
          <input className="password" type="password" />
        </div>

        <div className="input-box">
          <label>Password confirmation:</label>
          <input className="password_confirmation" type="password" />
        </div>
        <div className="input-box button">
          <input type="submit" className="btn" value="Sign In" />
        </div>
      </form>
    </div>
  );
};
