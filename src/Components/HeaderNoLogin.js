import React, {  useState } from "react";
// import { useNavigate } from "react-router-dom";

import Login from "./Login";
import "../CSS/HeaderNoLogin.css";

import logo from "../Assets/logo.png";

function HeaderNoLogin() {
  const [openLogin, setOpenLogin] = useState(false);

  
  return (
    <header className="header-landing-page">
      <div className="main-heading">
        <div className="main-heading-img">
          <img src={logo} alt=""></img>
        </div>
        <div className="main-heading-title">
          <h1 >
            Blog
            <br />
            Banteng
            <br />
            Merah
          </h1>
        </div>
      </div>
      <div className="main-button">
        <div className="main-button-login">
          <div className="button-sign-in" >
            <button onClick={() => setOpenLogin (true)} className="login-btn">Login</button>
          </div>
          <div className="button-sign-up">
            <button className="register-btn" >Register</button>
          </div>
        </div>
      </div>
      <Login trigger={openLogin} setTrigger = {setOpenLogin}>
      </Login>
    </header>
  );
}

export default HeaderNoLogin;

  
