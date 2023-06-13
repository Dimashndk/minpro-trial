import React from 'react'
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css"
import Product from './Product';
import { productData, responsive } from './Data';

// import '../CSS/Carousel.css'  


function CarouselSection() {
    const product = productData.map((item) => (
        <Product
        name={item.name}
        url={item.imageurl}
        price={item.price}
        description={item.description}
      />
  
    ));
  return (
    <>
    
    <div className='Carousel'>
    
      <Carousel  showDots ={true} responsive={responsive}>
        {product}
      </Carousel>
      </div>
    </>
  )
}

export default CarouselSection
