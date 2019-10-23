import React from 'react';

import quoteImg from '../images/quote.PNG'

const Projects = () => {
    return (
        <section>
        <h1 className="section-title">Projects</h1>
        <p className="section-body">I see no value in posting finished tutorials that can be easily copy pasted and are mostly made
            by coding along. I have recently updated front end libraries projects from freecodecamp that I did on my own 
            just as a little demonstration.
        </p>
        <article>
            <h2>Random Quote Machine</h2>
            <a href="https://quotemachine-milac.netlify.com/" target="_blank">
                <img className="project-image" src={quoteImg} alt="quote-machine" />
            </a>
            <p>hooks, axios, material-ui, lodash</p>
        </article>
        <article>
            <h2>Markdown Previewer</h2>
            <a href="https://markdown-milac.netlify.com/" target="_blank">
                <img className="project-image" src="images/markdown.PNG" alt="markdown-previewer" />
            </a>
            <p>nothing</p>
        </article>
        <article>
            <h2>Drum Machine</h2>
            <a href="https://quotemachine-milac.netlify.com/" target="_blank">
                <img className="project-image" src="images/quote.PNG" alt="quote-machine" />
            </a>
            <p>hooks, axios, material-ui</p>
        </article>
        <article>
            <h2>Pomodoro Clock</h2>
            <a href="https://quotemachine-milac.netlify.com/" target="_blank">
                <img className="project-image" src="images/quote.PNG" alt="quote-machine" />
            </a>
            <p>hooks, axios, material-ui</p>
        </article>
        </section>
    );
};

export default Projects;