import React from 'react'
import '../CSS/Change-email.css'
function Changeemail() {
  return (
    <section className="change-email-container">
      <h1>Change Email</h1>
      <div className="change-email-inner">
      <br />
        <div className="change-email-content">
          <div className="change-email-field">
            <div className="change-email-field-main">
              <label>Current Email :</label>
              <div className="change-email-content-input">
                <input type="text" placeholder="" />
              </div>
            </div>
          </div>
          <div className="change-email-title">
            <label>New Email :</label>
            <div className="change-email-content-input">
              <input type="text" placeholder=""></input>
            </div>
          </div>
          <div className="change-email-btn">
            <button>Change Email</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Changeemail