import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/final_logo.png'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div id='footer' className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
            <img className='logo' src={footer_logo} alt="" />
            <p>I’m Abhinav Kumar, a dedicated Full Stack Web Developer passionate about building complete web solutions from front to back. </p>
        </div>
        <div className="footer-top-right">
            <div className="footer-email-input">
                <img src={user_icon} alt="" />
                <input type="email" placeholder='Enter your email id' />
            </div>
            <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="foooter-botom-left">© 2025 Abhinav Kumar. All rights reserved.</p>
        <div className="footer-bottom-right">
          <p>Term of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  )
}

export default Footer