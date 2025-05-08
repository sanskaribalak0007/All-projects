import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
       <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate dolorem consequuntur eaque quasi. Iure alias omnis velit quaerat aperiam enim?</p>
            <div className="footer-socail-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>Company</h2>
            <ul>
                <li>Home</li>
                <li>About-us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>Abhinav Kumar</li>
                <li>6287613096</li>
                <li>sanskaribalak0007@gmail.com</li>
            </ul>
        </div>
        
       </div>
       <hr />
       <p className="footer-copy-right">Copyright 2024 @ Tomato.com -All Right Reserved.</p>
    </div>
  )
}

export default Footer