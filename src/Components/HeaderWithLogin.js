import React, { useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";

import './DropDownProfile'
import "../CSS/HeaderWithLogin.css";


import logo from "../Assets/logo.png";
import search from "../Assets/icons8-search-50.png";
import droplogo from "../Assets/icons8-dropdown-50.png";
import user from "../Assets/user-pic.jpeg";
import DropDownProfile from "./DropDownProfile";

function HeaderWithLogin() {

    const [openDropDown, setOpenDropDown] = useState (false);

    let menuRef = useRef ();
      useEffect(() => {
        let handler = (e) => {
          if (!menuRef.current.contains(e.target)) {
            setOpenDropDown(false);
            console.log(menuRef.current);
          }
        };
        document.addEventListener("mousedown", handler);

        return () => {
          document.removeEventListener("mousedown", handler);
        };
      });

  return (
    <div>
      <header className="header-profile">
        <div className="heading-profile">
          <div className="heading-profile-logo">
            <img className="logo" src={logo} alt=""></img>
          </div>
          <div className="heading-profile-title">
            <h1 className="h1-title">
              Blog
              <br />
              Banteng
              <br />
              Merah
            </h1>
          </div>
        </div>
        <div className="heading-search-bar">
          <img className="search-logo" src={search} alt="" />
          <input type="text" placeholder="Search post" />
        </div>
        <div className="heading-profile-picture">
          <img className="profile-picture" src={user} alt="" />
          <div
            ref={menuRef}
            className="profile-btn-dropdown"
            onClick={() => (setOpenDropDown (!openDropDown))}
          >
            <h2 className="profile-picture-title">FirstName</h2>
            <img className="drop-logo" src={droplogo} alt="" />
            <DropDownProfile trigger={openDropDown} setTrigger = {setOpenDropDown}>
            </DropDownProfile>
          </div>
        </div>
      </header>
      <Outlet />
    </div>
  );
}

export default HeaderWithLogin;
