import React, { useState } from "react";
import { Formik } from "formik";

import close from "../Assets/icons8-close-30.png";

import "../CSS/Login.css";

function Login(props) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);

  function togglePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState);
  }

  return (props.trigger) ? (
    <div className="container-login">
      <div className="inner-login">
        <div className="login">
          <div className="login-form">
            <div className="login-section-1">
              <div className="login-form-title">
                <h2>Login</h2>
              </div>
              <div className="login-form-btn">
                <img onClick={() => props.setTrigger(false)} src={close} alt="" />
              </div>
              {props.children}
            </div>
            <hr />
            <Formik>
              <form className="login-section-2">
                <div class="login-input-field">
                  <input
                    className="username"
                    type="text"
                    placeholder="Username"
                  />
                </div>

                <div class="login-input-field">
                  <input className="email" type="email" placeholder="email" />
                </div>

                <div class="login-input-field">
                  <input
                    className="phone-number"
                    type="phone-number"
                    placeholder="phone"
                  />
                </div>

                <div class="login-input-field">
                  <input
                    className="password"
                    type={isPasswordVisible ? "text" : "password"}
                    placeholder="Password"
                  />
                </div>
                <label className="flex items-center mt-2">
                  <input
                    type="checkbox"
                    className="mr-2 w-4 h-4"
                    checked={isPasswordVisible}
                    onChange={togglePasswordVisibility}
                  />
                  <span className="text-sm text-gray-600">Show password</span>
                </label>
              </form>
            </Formik>
            <hr className="testing" />
            <div className="login-section-3">
              <p>
                Don't have an account?
                <span
                  className="span-to-register"
                  onClick={() => {
                    setOpenRegister(true);
                  }}
                  // onClick={() => {setOpenLogin(openLogin)}}
                >
                  Sign Up
                </span>
              </p>
              <input
                type="submit"
                value="Login"
                className="form-login-btn solid"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  ): "";
}

export default Login;
