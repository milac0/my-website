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
                        <a href="#"><img src={githubImage} alt="github" /></a>
                    </ul>
                    <ul>
                        <a href="#"><img src={githubImage} alt="github" /></a>
                    </ul>
                </li>
            </ul>
          </nav>
          <div className="hero-profile">
              <img src={profileImage} className="profile-image" alt="profile" />
          </div>
      </div>
    </header>
  );
};

export default Navbar;
