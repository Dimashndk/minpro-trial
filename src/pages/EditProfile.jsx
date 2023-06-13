import React, { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

import Changepassword from "../Components/Change-password";

import "../CSS/Profile-edit.css";

import user from "../Assets/user-pic.jpeg";
import username from "../Assets/icons8-name-50.png";
import email from "../Assets/icons8-email-50.png";
import phone from "../Assets/icons8-phone-50.png";

function EditProfile() {
  return (
    <div className="container-setting">
      <div className="inner-setting">
        <div className="heading-setting">
          <h2 className="heading-setting-h2"> Profile</h2>
        </div>
        <section className="general-information">
          <div className="general-information-heading">
            <h2 className="general-information-h2"> General Information</h2>
          </div>
          <hr className="general-information-hr" />
          <div className="general-information-main">
            <div className="general-information-main-left">
              <div className="change-pic-username-email">
                <img src={user} alt="" />
              </div>
              <div className="change-pic-username-email-title">
                <div className="change-pic-username">
                  <p>Dimas Handoko</p>
                </div>
                <div className="change-pic-email">
                  <p>emailUser</p>
                </div>
              </div>

              {
                //<div className="change-pic-right">
                //<button className="change-pic-btn">Browse Picture</button>
                //</div>
              }
            </div>
            <div className="general-information-main-right">
              <div className="general-information-username">
                <div className="general-information-username-content">
                  <p>Username :</p>
                  <div className="general-information-username-content-input">
                    <input type="text" placeholder="Username"></input>
                    <img className="username-logo" src={username} alt="" />
                  </div>
                </div>
                {
                  //   <div className="general-information-change-username-btn">
                  //   <button className="change-username-btn">
                  //     Change Usernanme
                  //   </button>
                  // </div>
                }
              </div>
              <div className="general-information-username">
                <div className="general-information-username-content">
                  <p>Phone Number:</p>
                  <div className="general-information-username-content-input">
                    <input type="text" placeholder="PhoneNumber"></input>
                    <img className="username-logo" src={phone} alt="" />
                  </div>
                </div>
                {
                  //   <div className="general-information-change-username-btn">
                  //   <button className="change-username-btn">
                  //     Change Phone Number
                  //   </button>
                  // </div>
                }
              </div>
              <div className="general-information-username">
                <div className="general-information-username-content">
                  <p>Email Address:</p>
                  <div className="general-information-username-content-input">
                    <input type="text" placeholder="Email Address"></input>
                    <img className="username-logo" src={email} alt="" />
                  </div>
                </div>
                {
                  //  <div className="general-information-change-username-btn">
                  //   <button className="change-username-btn">Change Email</button>
                  // </div>
                }
              </div>
            </div>
          </div>
        </section>
        <div className="heading-setting">
          <h2 className="heading-setting-h2">Settings</h2>
        </div>
        <section className="setting-option">
          <Link to="/profile/edit-profile/change-username">
            <p>Username</p>
          </Link>
          <Link to="/profile/edit-profile/change-password">
            <p>Password</p>
          </Link>
          <Link to="/profile/edit-profile/change-email">
            <p>Email</p>
          </Link>
          <Link to="/profile/edit-profile/change-phone-number">
            <p>Phone</p>
          </Link>
        </section>
        <Outlet />
      </div>
    </div>
  );
}

export default EditProfile;
