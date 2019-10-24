import React from 'react';
import analyticalImg from '../images/analytical.svg'
import patternImg from '../images/pattern.svg'
import adaptiveImg from '../images/adaptive.svg'

const Experience = () => {
    return (
        <section>
                <h1 class="section-title">Experience</h1>
                <p class="section-body">I have a work experience of a self-employed online poker player. 
                  You may be asking what does it mean to you as a potential employer. Online poker made me develop
                  skills that are translatable into programming:</p>
                    <div class="section-skill">
                        <img class="section-skill-image" src={analyticalImg} alt="analytical" />
                            <h2>Analytical and systematic approach</h2>
                            <p>There is not a lot difference between finding out where error happened
                        and narrowing down opponents card range.</p>
                    </div>
                    <div class="section-skill">
                        <img class="section-skill-image" src={patternImg} alt="pattern" />
                        <h2>Great pattern recognition</h2>
                        <p>Everyone has a thinking pattern and it's very expressed in poker. 
                        Made me understand Redux and prop drilling quite easy.</p>
                    </div>    
                    <div class="section-skill">
                        <img class="section-skill-image" src={adaptiveImg} alt="" />
                        <h2>Adaptable</h2>
                        <p>Poker has been evolving as fast as programming languages before
                        getting close to a solved game with poker solvers. I see adaptability as a key in both areas.</p>
                    </div>
            </section>
    );
};

export default Experience;