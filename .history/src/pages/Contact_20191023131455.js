import React, { Fragment } from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styles from './Contact.module.css'

const Contact = () => {
    return (
        <Fragment>
            <Navbar showHome/>
            <main>
        <div class="container">
            <section id="section-cta">
                <p class="section-title">You are welcome to leave feedback, critique or just say hello.</p>
                
            </section>
            <section>
                <form>
                    <input placeholder="name"/>
                    <input placeholder="email"/>
                    {/* <input placeholder="company name"/> */}
                    <input placeholder="message"/>
                </form>
            </section>
            <section>
                <p>If you don't feel like filling forms, you can contact me via</p>
                <ul>
                    <li>email</li>
                    <li>phone</li>
                    <li>linkedin</li>
                    <li>skype</li>
                </ul>
            </section>
        </div>
    </main>
    <Footer />
        </Fragment>
    );
};

export default Contact;