import Fb from '../Assets/facebook.png'
import Ig from '../Assets/instagram.png'
import Twitter from '../Assets/twitter.png'
import Linkedin from '../Assets/linkedin.png'
import Logo from '../Assets/logo.png'

import '../CSS/Footer.css'

const Footer = () => {
  
  return (
    <footer>
      <div className='footer-section-padding'>
          <div className='footer-content'>
            <section className='footer-section-first'>
              <h5 className='newsletter-heading'>Newsletter</h5>   
                <div className='footer-newsletter'>
                  <a className='footer-a' href='/popular'>
                    <p>Popular</p>
                  </a>
                  <a className='footer-a' href='/trending'>
                    <p>Trending</p>
                  </a>
                </div>
            </section>
            <section className='footer-section-second'>
                <h5 className='categories-heading'>Categories</h5>
                <div className='footer-categories-center'> 
                  <div className='footer-categories'>
                    <a className='footer-a' href='/culinary'>
                        <p>Culinary</p>
                    </a>
                    <a className='footer-a' href='/international'>
                        <p>International</p>
                    </a>
                    <a className='footer-a' href='/fiction'>
                        <p>Fiction</p>
                    </a>
                  </div>
                  <div className='footer-categories'>
                    <a className='footer-a' href='/business'>
                        <p>Business</p>
                    </a>
                    <a className='footer-a' href='/economy'>
                        <p>Ecomony</p>
                    </a>
                    <a className='footer-a' href='/technology'>
                        <p>Technology</p>
                    </a>
                    <a className='footer-a' href='/sport'>
                        <p>Sport</p>
                    </a>
                   </div>
                </div>
            </section>
          
            <section className='footer-third'>
                <div className='footer-logo'>
                  <img className='footer-img' src={Logo} alt=''></img>
                  <div className='footer-title'>
                      <h1 className='footer-title-main'>Blog <br/>Banteng <br/>Merah</h1>
                  </div>
              </div>
              <div className='social-media'>
                  <p><img src={Fb} alt= " "/></p>
                  <p><img src={Twitter} alt= " "/></p>
                  <p><img src={Linkedin} alt= " "/></p>
                  <p><img src={Ig} alt= " "/></p>
              </div>
            </section>
          </div>
      </div>
      <hr className='footer-hr'/>
      <section className='footer-fourth'>
          <div className='copyright'>
              <p>
                  Copyright @{new Date().getFullYear()} All rights reserved.
              </p>
          </div>
      </section>
    </footer>
  )
}

export default Footer