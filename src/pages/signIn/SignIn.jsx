import React from "react";
import "./signin.css";
export const SignIn = () => {
  return (
    <div className="signin-form">
      <h1>Signup</h1>
      <ul></ul>
      <form>
        <div>
          Email: <input className="email" type="email" />
        </div>
        <div>
          Address: <input className="address" type="address" />
        </div>
        <div>
          Password: <input className="password" type="password" />
        </div>
        <div>
          Phone: <input className="phone" type="phone" />
        </div>
        <div>
          Password confirmation: <input className="password_confirmation" type="password" />
        </div>
        <button type="submit" className="btn">
          SignIn
        </button>
      </form>
    </div>
  );
};
