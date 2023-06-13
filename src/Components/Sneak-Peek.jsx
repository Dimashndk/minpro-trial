import React from 'react'

import favorite from '../Assets/icons8-favorite-50.png'

export default function SneakPeek(props) {
  return (
    <div className="sneak-peek-with-pic">
      <div className="sneak-peek-img">
        <img
          className="sp-img"
          src={props.url}
          alt=""
        />
      </div>    
      <div className="sneak-peek-popular-content">
        <h3 className="mini-article-h3">{props.title}</h3>
        <div>
          <h4 className="mini-article-h4">{props.name}</h4>
          <p className="mini-article-p">
            {props.date}
            <span>{props.category}</span>
            <span>
                <img src={favorite} alt='' />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

