import React from "react";
import { Link } from 'react-router-dom'
// import zivotopis from '../zivotopis.pdf'

const Navbar = () => {
  return (
    <header>
        <div class="container">
            <nav>
                <li>
                    <ul><Link to="" download target="_self"><img  class="nav-item" src="images/resume.png" alt="resume" /></Link></ul>
                    <ul><Link to="github.com"><img  class="nav-item" src="images/linkedin.png" alt="linkedin" /></Link></ul>
                    <ul><Link to="github.com"><img  class="nav-item" src="images/github.png" alt="github" /></Link></ul>
                </li>
            </nav>
        </div>
    </header>
  );
};

export default Navbar;
