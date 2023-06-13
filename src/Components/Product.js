import React from "react";
import '../CSS/Carousel.css'
export default function Product(props) {
  return (
   
      <div className="card">
        <img className="product-img" src={props.url} alt="product-img" />
        <h2>{props.name}</h2>
        <p className="price">{props.price}</p>
        <p>{props.description}</p>
        <p>
          <button>Add to Cart</button>
        </p>
      </div>
  ); 
}