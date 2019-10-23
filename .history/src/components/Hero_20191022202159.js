import React from 'react';
import profileImg from '../images/profile.png'

const Hero = () => {
    return (
        <div className="hero">
        <div className="container">
            <div className="hero-profile">
                <img src={profileImg} className="hero-profile-image" alt="profile" />
                <h1 className="hero-profile-title">Mile Balenovic</h1>
                <p className="hero-profile-subtitle">Switching career to <strong>React</strong> development</p>
                <a className="button-cta" href="contact.html">Contact Me!</a>
            </div>
        </div>
    </div>
    );
};

export default Hero;