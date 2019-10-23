import React from "react";
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header>
        <div class="container">
            <nav>
                <li>
                    <ul><Link><img  class="nav-item" src="images/resume.png" alt="resume" /></Link></ul>
                    <ul><Link><img  class="nav-item" src="images/linkedin.png" alt="linkedin" /></Link></ul>
                    <ul><Link><img  class="nav-item" src="images/github.png" alt="github" /></Link></ul>
                </li>
            </nav>
        </div>
    </header>
  );
};

export default Navbar;
