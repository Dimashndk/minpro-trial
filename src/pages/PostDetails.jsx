import React from "react";
import { useParams } from "react-router-dom";
import monyet from '../Assets/monyet.jpeg'
import user from '../Assets/user-pic.jpeg'
import favorite from '../Assets/icons8-favorite-50.png'

import '../CSS/PostDetail.css'
function PostDetails() {
  const { id } = useParams();
  return (
    <section className="post-detail-container">
      <div className="post-detail-inner">
        <div className="post-detail-content">
          <div className="post-detail-content-img">
            <img src={monyet} alt="" />
          </div>
          <div className="post-detail-content-title">
            <h1>title</h1>
          </div>
          <div className="post-detail-content-user">
            <div className="post-detail-content-user-pic">
              <img src={user} alt="user" />
            </div>
            <div className="post-detail-content-user-desc">
              <div className="post-detail-content-user-desc-username-1">
                <p>username</p>
              </div>
              <div className="post-detail-content-user-desc-username-2">
                <p>
                created at 

                </p>
                <p>category</p>
              </div>
            </div>
          </div>
          <div className="post-detail-content-favorite">
            <img src={favorite} alt="favorite" />
          </div>
          <div className="post-detail-content-articel">
            <p>articel{id}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PostDetails;
