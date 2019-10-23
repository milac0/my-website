import React, { Fragment } from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Contact = () => {
    return (
        <Fragment>
            <Navbar showHome/>
            <main>
        <div class="container">
            <section id="section-cta">
                <p class="section-title">Do you like what you've read?</p>
                
            </section>
            <section>
                <form>
                    <input />
                    <input />
                    <input />
                    <input />
                </form>
            </section>
            <section>
                <p>If you don't feel like filling forms, you can contact me via</p>
                mail
                phone number
                linkedin
                skype
            </section>
        </div>
    </main>
    <Footer />
        </Fragment>
    );
};

export default Contact;