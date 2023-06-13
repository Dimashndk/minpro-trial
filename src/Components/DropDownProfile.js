import React from "react";
import { Link } from "react-router-dom";

import "../CSS/DropDownProfile.css";

import user from "../Assets/user-pic.jpeg";
import favorite from "../Assets/icons8-favorite-50.png";
import profile from "../Assets/icons8-name-50.png";
import logout from "../Assets/icons8-logout-24.png";

function DropDownProfile(props) {
  return props.trigger ? (
    <div>
      <div className="dropdown">
        <div className="dropdown-inner">
          {props.children}
          <Link className="link-dropdown" to="/profile">
            <div className="dropdown-profile">
              <img className="dropdown-profile-picture" src={user} alt="" />
              <div className="dropdown-profile-title">
                <div className="dropdown-title">
                  <h2 className="dropdown-title-user">FullName</h2>
                </div>
                <div className="dropdown-email">
                  <p className="dropdown-email-user">"emailUser"</p>
                </div>
              </div>
            </div>
          </Link>
          <hr className="dropdown-hr" />
          <div className="dropdown-menu">
            <div className="dropdown-menu-content">
              <div className="dropdown-menu-icon">
                <img className="menu-icon" src={favorite} alt="" />
              </div>
              <div className="dropdown-menu-title">
                <a className="menu-title" href="/">
                  Favorite's Blog
                </a>
              </div>
            </div>
            <hr className="dropdown-hr" />
            <div className="dropdown-menu-content">
              <div className="dropdown-menu-icon">
                <img className="menu-icon" src={profile} alt="" />
              </div>
              <Link to="/profile/edit-profile">
                <div className="dropdown-menu-title">
                  <p className="menu-title" >
                    Edit Profile
                  </p>
                </div>
              </Link>
            </div>
            <hr className="dropdown-hr" />
            <div className="dropdown-menu-content">
              <div className="dropdown-menu-icon">
                <img className="menu-icon" src={logout} alt="" />
              </div>
              <div className="dropdown-menu-title">
                <a className="menu-title" href="/">
                  Logout
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default DropDownProfile;
