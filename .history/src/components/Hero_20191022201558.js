import React from 'react';
import profileImg from '../images/profile.png'

const Hero = () => {
    return (
        <div class="hero">
        <div class="container">
            <div class="hero-profile">
                <img src={profileImg} class="hero-profile-image" alt="profile" />
                <h1 class="hero-profile-title">Mile Balenovic</h1>
                <p class="hero-profile-subtitle">Switching career to <strong>React</strong> development</p>
                <a class="button-cta" href="contact.html">Contact Me!</a>
            </div>
        </div>
    </div>
    );
};

export default Hero;