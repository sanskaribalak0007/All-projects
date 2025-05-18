import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.jpg";
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img className="profile_img" src={profile_img} alt="" />
      <h1><span>Hey, I'm Abhinav Kumar </span>aspiring Full Stack Web Developer based in India.</h1>
      <p>
        I’m a B.Tech student and aspiring Full Stack Developer with a solid understanding of both frontend and backend development. I love solving problems with code and am constantly exploring new tools and best practices to improve my skills.
      </p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
};

export default Hero;
