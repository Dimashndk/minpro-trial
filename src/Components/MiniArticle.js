import React from "react";
// import SneakPeek from "./Sneak-Peek";
import "../CSS/MiniArticle.css";
// import { articleData } from "./Data";




function MiniArticle() {
 

  return (
    <>
      <section className="mini-article">
        <div className="popular-post-section">
          <h2 className="mini-article-h2">POPULAR POST</h2>
          <div className="popular-post">
            <div className="heading-popular-post">
              <img
                src="https://preview.colorlib.com/theme/meranda/images/img_h_1.jpg.webp"
                alt=""
              />
              <div className="heading-popular-post-content">
                <h3 className="mini-article-h3">POPULAR POST HEADING TITLE</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <div>
                  <h4 className="mini-article-h4">Author</h4>
                  <p>
                    date <span>read</span> <span>⭐️</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="sneak-peek-popular-post">
              <div className="sneak-peek-with-pic">
                
              </div>  
              <div className="sneak-peek-with-pic">
                <div className="sneak-peek-img">
                  <img
                    className="sp-img"
                    src="https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcTOQGx2jU4L4mDCrkwWjqeg6I50JgdsPPWgM9z0nbwUtuTu4bple1U57iLhA3N0ypkNSyKZrIPSp08vh9A"
                    alt=""
                  />
                </div>
                <div className="sneak-peek-popular-content">
                  <h3 className="mini-article-h3">SNEAK PEEK TITLE</h3>
                  <div>
                    <h4 className="mini-article-h4">Author</h4>
                    <p>
                      date <span>read</span> <span>⭐️</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="sneak-peek-with-pic">
                <div className="sneak-peek-img">
                  <img
                    className="sp-img"
                    src="https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcTOQGx2jU4L4mDCrkwWjqeg6I50JgdsPPWgM9z0nbwUtuTu4bple1U57iLhA3N0ypkNSyKZrIPSp08vh9A"
                    alt=""
                  />
                </div>
                <div className="sneak-peek-popular-content">
                  <h3 className="mini-article-h3">SNEAK PEEK TITLE</h3>
                  <div>
                    <h4 className="mini-article-h4">Author</h4>
                    <p>
                      date <span>read</span> <span>⭐️</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="trending-post-section">
          <h2 className="mini-article-h2">Trending</h2>
          <div className="trending-post-entry">
            <div className="trending-sneak-peek">
              <div className="trending-sneak-peek-num">01</div>
              <div className="trending-sneak-peek-content">
                <h3 className="mini-article-h3">title</h3>
                <div>
                  <h4 className="mini-article-h4">username</h4>
                  <p>
                    date <span>read</span> <span>⭐️</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="trending-sneak-peek">
              <div className="trending-sneak-peek-num">02</div>
              <div className="trending-sneak-peek-content">
                <h3 className="mini-article-h3">title</h3>
                <div>
                  <h4 className="mini-article-h4">username</h4>
                  <p>
                    date <span>read</span> <span>⭐️</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="trending-sneak-peek">
              <div className="trending-sneak-peek-num">03</div>
              <div className="trending-sneak-peek-content">
                <h3 className="mini-article-h3">title</h3>
                <div>
                  <h4 className="mini-article-h4">username</h4>
                  <p>
                    date <span>read</span> <span>⭐️</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="trending-sneak-peek">
              <div className="trending-sneak-peek-num">04</div>
              <div className="trending-sneak-peek-content">
                <h3 className="mini-article-h3">title</h3>
                <div>
                  <h4 className="mini-article-h4">username</h4>
                  <p>
                    date <span>read</span> <span>⭐️</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default MiniArticle;
