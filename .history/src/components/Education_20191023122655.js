import React from 'react';

const Education = () => {
    return (
        <section>
                <h1 className="section-title">Education</h1>
                    <article className="article-education">
                        <h2>Informal education</h2>
                        <p>Internet is full of programming materials. Sites listed down below helped me learn a lot about  
                            <strong> HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, 
                            <strong>React</strong> and a little bit about other technologies from the ground up.
                        </p>
                        <ul>
                            <li>freeCodeCamp.org</li>
                            <li>Udemy courses from Andrew Mead and Maximilian Schwarzmüller</li>
                            <li>Youtube tutorials from channels: classNameed, The Net Ninja, Travery Media </li>
                            <li>MDN</li>
                            <li>W3Schools</li>
                            <li>stackoverflow</li>
                        </ul>
                    </article>
                    <article className="article-education">
                        <h2>Formal Education</h2>
                        <ul>
                            <li><strong>University of Zagreb, Faculty of Electrical Engineering and Computing</strong>, Master of Science in Information and communication technology - Oct 2011 - Sep 2014</li>
                            <li><strong>University of Zagreb, Faculty of Electrical Engineering and Computing</strong>, Bachelor of Science in Computing - Oct 2008 - Jun 2011</li>
                            <li><strong>Technical School of Ruđer Bošković</strong> - Sep 2004 - May 2008</li>
                        </ul>
                </article>
            </section>
    );
};

export default Education;