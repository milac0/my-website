import React from 'react';
import { Link } from 'react-router-dom'

const SectionCTA = () => {
    return (
        <section id="section-cta">
                <h1 className="section-title">Do you like what you've read?</h1>
                <p className="section-body">I have plenty more to learn and with the guidance of yours experienced
                    employees I'm sure I can contribute to your company in no time.
                </p>
                <Link className="button-cta" to="/contact">Contact Me!</Link>
            </section>
    );
};

export default SectionCTA;