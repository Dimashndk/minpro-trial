import React from "react";


import "../CSS/Change-password.css";

function Changepassword() {
  return (
    <section className="change-password-container">
      <h1>Change Password</h1>
      <div className="change-password-inner">
        <br />

        <div className="change-password-content">
          <div className="change-password-field">
            <div className="change-password-field-main">
              <label>Current Password :</label>
              <div className="change-password-content-input">
                <input type="text" placeholder=""></input>
              </div>
            </div>
          </div>
          <div className="change-password-field">
            <div className="change-password-field-main">
              <label>Current Password :</label>
              <div className="change-password-content-input">
                <input type="text" placeholder=""></input>
              </div>
            </div>
          </div>
          
        </div>
        <div className="change-password-btn">
          <button>Change Password</button>
        </div>
      </div>
    </section>
  );
}

export default Changepassword;
