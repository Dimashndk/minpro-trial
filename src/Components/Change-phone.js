import React from 'react'
import '../CSS/Change-phone.css'

function Changephone() {
  return (
    <section className="change-phone-container">
      <h1>Change Phone Number</h1>
      <div className="change-phone-inner">
        <br />
        <div className="change-phone-content">
          <div className="change-phone-field">
            <div className="change-phone-field-main">
              <label>Current Phone Number :</label>
              <div className="change-phone-content-input">
                <input type="number" placeholder="" />
              </div>
            </div>
          </div>
          <div className="change-phone-title">
            <label>New Phone Number :</label>
            <div className="change-phone-content-input">
              <input type="number" placeholder=""></input>
            </div>
          </div>
          <div className="change-phone-btn">
            <button>Change Phone Number</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Changephone