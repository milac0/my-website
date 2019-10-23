import React from "react";
import githubImage from '../images/github.png'

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
                </li>
            </ul>
          </nav>
      </div>
    </header>
  );
};

export default Navbar;
