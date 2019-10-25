import React from "react";
import { Link } from "react-router-dom";
import profileImg from "../images/profile.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero-profile">
          <div className="hero-profile-image">
            <img src={profileImg} alt="profile" />
          </div>
          <h1 className="hero-profile-title">Mile Balenovic</h1>
          <p className="hero-profile-subtitle">
            Switching career to <strong>React</strong> development
          </p>
          <Link to="/contact">
            <button className="button-cta">Contact Me!</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
