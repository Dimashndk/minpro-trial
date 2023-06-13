import React from "react";
import { Outlet, useLocation } from "react-router-dom";

import monyet from "../Assets/monyet.jpeg";
import favorite from "../Assets/icons8-favorite-50.png";

import Navbar from "../Components/Navbar";

import "../CSS/Profile-post.css";
import "../CSS/Profile-category-tranding.css";
import { useState, useEffect } from "react";

function ProfileLayout() {
  const { pathname } = useLocation();
  const [trending, setTrending] = useState([
    {
      id: 1,
    },
    {
      id: 2,
    },
  ]);

  useEffect(() => {
    console.log(trending, "trending");
  }, []);
  console.log("pathname", pathname);

  const isProfilePage = pathname === "/profile" || pathname === "/profile/";

  const renderTrending = () => {
    return trending.map((val, index) => {
      return (
        // <hr className="profile-trending-hr" />
        <div className="profile-trending-sneak-peek-content">
          <h3 className="profile-trending-h3">title {val.id}</h3>
          <h4 className="profile-trending-h4">username</h4>
          <div className="profile-trending-footer">
            <p className="profile-trending-p">created at</p>
            <img className="profile-trending-img" src={favorite} alt="" />
          </div>
        </div>
      );
    });
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Navbar />
        <div className="container-profile">
        <div className="profile-heading">
        <h1>Dashboard</h1>
        </div>
          {isProfilePage ? (
            <div className="inner-profile">
              <div className="profile-post">
                <div className="profile-post-create-blog">
                  <button>Create Blog</button>
                </div>
                <div className="profile-post-content">
                  <div className="profile-post-main">
                    <div className="profile-post-main-author">
                      <h3>username</h3>
                    </div>
                    <div className="profile-post-main-title">
                      <h2>title</h2>
                    </div>
                    <div className="profile-post-main-article">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur.
                      </p>
                    </div>
                    <div className="profile-post-main-footer">
                      <div className="profile-post-main-footer-left">
                        <p>
                          date
                          <span>&#183;</span>
                        </p>
                        <button>Category</button>
                      </div>
                      <div className="profile-post-main-footer-right">
                        <img src={favorite} alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="profile-post-pic">
                    <img src={monyet} alt="" />
                  </div>
                </div>
                <hr className="profile-post-hr" />
                <div className="profile-post-content">
                  <div className="profile-post-main">
                    <div className="profile-post-main-author">
                      <h3>username</h3>
                    </div>
                    <div className="profile-post-main-title">
                      <h2>title</h2>
                    </div>
                    <div className="profile-post-main-article">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur.
                      </p>
                    </div>
                    <div className="profile-post-main-footer">
                      <div className="profile-post-main-footer-left">
                        <p>
                          date
                          <span>&#183;</span>
                        </p>
                        <button>Category</button>
                      </div>
                      <div className="profile-post-main-footer-right">
                        <img src={favorite} alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="profile-post-pic">
                    <img src={monyet} alt="" />
                  </div>
                </div>
                <hr className="profile-post-hr" />
                <div className="profile-post-content">
                  <div className="profile-post-main">
                    <div className="profile-post-main-author">
                      <h3>username</h3>
                    </div>
                    <div className="profile-post-main-title">
                      <h2>title</h2>
                    </div>
                    <div className="profile-post-main-article">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur.
                      </p>
                    </div>
                    <div className="profile-post-main-footer">
                      <div className="profile-post-main-footer-left">
                        <p>
                          date
                          <span>&#183;</span>
                        </p>
                        <button>Category</button>
                      </div>
                      <div className="profile-post-main-footer-right">
                        <img src={favorite} alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="profile-post-pic">
                    <img src={monyet} alt="" />
                  </div>
                </div>
                <hr className="profile-post-hr" />
                <div className="profile-post-content">
                  <div className="profile-post-main">
                    <div className="profile-post-main-author">
                      <h3>username</h3>
                    </div>
                    <div className="profile-post-main-title">
                      <h2>title</h2>
                    </div>
                    <div className="profile-post-main-article">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur.
                      </p>
                    </div>
                    <div className="profile-post-main-footer">
                      <div className="profile-post-main-footer-left">
                        <p>
                          date
                          <span>&#183;</span>
                        </p>
                        <button>Category</button>
                      </div>
                      <div className="profile-post-main-footer-right">
                        <img src={favorite} alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="profile-post-pic">
                    <img src={monyet} alt="" />
                  </div>
                </div>
                <hr className="profile-post-hr" />
                <div className="profile-post-content">
                  <div className="profile-post-main">
                    <div className="profile-post-main-author">
                      <h3>username</h3>
                    </div>
                    <div className="profile-post-main-title">
                      <h2>title</h2>
                    </div>
                    <div className="profile-post-main-article">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur.
                      </p>
                    </div>
                    <div className="profile-post-main-footer">
                      <div className="profile-post-main-footer-left">
                        <p>
                          date
                          <span>&#183;</span>
                        </p>
                        <button>Category</button>
                      </div>
                      <div className="profile-post-main-footer-right">
                        <img src={favorite} alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="profile-post-pic">
                    <img src={monyet} alt="" />
                  </div>
                </div>
                <hr className="profile-post-hr" />
                <div className="profile-post-content">
                  <div className="profile-post-main">
                    <div className="profile-post-main-author">
                      <h3>username</h3>
                    </div>
                    <div className="profile-post-main-title">
                      <h2>title</h2>
                    </div>
                    <div className="profile-post-main-article">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur.
                      </p>
                    </div>
                    <div className="profile-post-main-footer">
                      <div className="profile-post-main-footer-left">
                        <p>
                          date
                          <span>&#183;</span>
                        </p>
                        <button>Category</button>
                      </div>
                      <div className="profile-post-main-footer-right">
                        <img src={favorite} alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="profile-post-pic">
                    <img src={monyet} alt="" />
                  </div>
                </div>
                <hr className="profile-post-hr" />
              </div>
              <div className="profile-category-trending">
                <div className="testing-div">
                  <div className="profile-category">
                    <div className="profile-category-header">
                      <h2>Discover more of what matters to you</h2>
                      <hr />
                    </div>
                    <div className="profile-category-menu">
                      <div className="profile-category-menu-content">
                        <button>Culinary</button>
                      </div>
                      <div className="profile-category-menu-content">
                        <button>International</button>
                      </div>
                      <div className="profile-category-menu-content">
                        <button>Fiction</button>
                      </div>
                      <div className="profile-category-menu-content">
                        <button>Business</button>
                      </div>
                      <div className="profile-category-menu-content">
                        <button>Economy</button>
                      </div>
                      <div className="profile-category-menu-content">
                        <button>Technology</button>
                      </div>
                      <div className="profile-category-menu-content">
                        <button>Sport</button>
                      </div>
                    </div>
                  </div>
                  <div className="profile-trending">
                    <h2 className="profile-trending-h2">Trending</h2>

                    <div className="profile-trending-post-entry">
                      {renderTrending()}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <Outlet />
          )}
        </div>
      </div>
    </div>
  );
}

export default ProfileLayout;

// Menu Config

// const navigations = [
//   {
//     path: "/profile/settings",
//     name: "Settings",
//   },
//   {
//     path: "/profile/posts",
//     name: "Posts",
//   },
// ];

// Sample Render Menu from Array above

// <div
//   style={{
//     width: "100vw",
//     backgroundColor: "red",
//     height: "40px",
//     display: "flex",
//     flexDirection: "row",
//   }}
// >
//   <Link to="/profile">
//     <p>Header</p>
//   </Link>
//   <div
//     style={{
//       flex: 1,
//       flexDirection: "row",
//     }}
//   >
//     {navigations.map((nav, index) => {
//       return (
//         <Link key={index} to={nav.path}>
//           <button>{nav.name}</button>
//         </Link>
//       );
//     })}
//   </div>
// </div>;

