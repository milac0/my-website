import React from "react";
import githubImage from '../images/github.png'
import profileImage from '../images/profile.png'

const Navbar = () => {
  return (
    <header>
      <div className="container">
          <nav>
            <ul>
                <li>
                    <ul>
                        <a href="#"><img className="github-image" src={githubImage} alt="github" /></a>
                    </ul>
                    <ul>
                        <a href="#"><img className="github-image"  src={githubImage} alt="github" /></a>
                    </ul>
                </li>
            </ul>
          </nav>
          <div className="hero-profile">
              <img src={profileImage} className="profile-image" alt="profile" />
              <h1 className="profile-title">Mile Balenovic</h1>
          </div>
      </div>
    </header>
  );
};

export default Navbar;
