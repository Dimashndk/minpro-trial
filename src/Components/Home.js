import React from 'react'

import CarouselSection from './Carousel'
import MiniArticle from './MiniArticle'
import AllPostCategory from './AllPost-Category'
import Footer from './Footer'
// import HeaderWithLogin from './HeaderWithLogin'


function Home() {
  return (
    <div>
      <br />
      <br />
        <CarouselSection />
        <br/>
        <MiniArticle />    
        <br /> 
        <AllPostCategory />   
        <br />
        <Footer />
    </div>
  )
}

export default Home