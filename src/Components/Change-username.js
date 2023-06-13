

import React from "react";
import "../CSS/change-username.css";

function Changeusername() {
  return (
    <section className="change-username-container">
      <h1>Change Username</h1>
      <div className="change-username-inner">
      <br />
        <div className="change-username-content">
          <div className="change-username-field">
            <div className="change-username-field-main">
              <label>Current Username :</label>
              <div className="change-username-content-input">
                <input type="text" placeholder="" />
              </div>
            </div>
          </div>
          <div className="change-username-title">
            <label>New Username :</label>
            <div className="change-username-content-input">
              <input type="text" placeholder=""></input>
            </div>
          </div>
          <div className="change-username-btn">
            <button>Change Username</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Changeusername;
