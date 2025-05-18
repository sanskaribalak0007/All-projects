import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_image from "../../assets/profile_img.jpg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_image} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I’m Abhinav Kumar, a dedicated Full Stack Web Developer passionate about building complete web solutions from front to back. As a fresher, I bring energy, creativity, and a hunger to learn and grow in real-world development environments.
            </p>
            <p>
              Building responsive, dynamic websites that blend creativity with code.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>React js</p>
              <hr style={{ width: "90%" }} />
            </div>
            <div className="about-skill">
              <p>Express js</p>
              <hr style={{ width: "65%" }} />
            </div>
            <div className="about-skill">
              <p>Node js</p>
              <hr style={{ width: "40%" }} />
            </div>
            <div className="about-skill">
              <p>Mongo Db</p>
              <hr style={{ width: "55%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
          <div className="about-achievement">
            <h1>1+</h1>
            <p>Years of Learning</p>
          </div>
          <hr />
          <div className="about-achievement">
            <h1>5+</h1>
            <p>Project Built</p>
          </div>
          <hr />
          <div className="about-achievement">
            <h1>100+</h1>
            <p>Hours of Coding</p>
          </div>
        </div>
    </div>
  );
};

export default About;
