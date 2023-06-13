import React from "react";
import { Link } from "react-router-dom";

import "../CSS/Navbar.css";

import changepic from "../Assets/change-photo copy.png";
import user from "../Assets/user-pic.jpeg";

function Navbar() {
  return (
    <section className="section-side-navbar">
      <div className="padding">
        <div className="side-navbar-profile">
          <div className="side-navbar-profile-picture">
            <img className="navbar-profile-img" src={user} alt="" />
            <div className="position-change-pic-logo">
              <div className="change-pic-logo">
                <img className="change-pic-img" src={changepic} alt="" />
              </div>
            </div>
          </div>
          <div className="navbar-user">
            <div className="navbar-user-title">
              <h2 className="navbar-username">FullName</h2>
            </div>
            <div className="navbar-user-email">
              <p className="navbar-email">"emailUser"</p>
            </div>
          </div>
        </div>
      </div>
      <hr className="hr-profile-menu" />
      <div className="padding">
        <div className="side-navbar-options">
        <Link to="/">
          <p>Home</p>
          </Link>
          <Link to="/profile">
          <p className="navbar-menu">Dashboard</p>
          </Link>
          {
            //<p className="navbar-menu">Posts</p>
          }
          <p className="navbar-menu">Create Blogs</p>
          <p className="navbar-menu">Favorite Blogs</p>
          <p>PROFILE</p>
          <Link to="/profile/edit-profile">
            <p className="navbar-menu">Edit Profile</p>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
