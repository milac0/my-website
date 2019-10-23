import React, { Fragment } from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Form from '../components/Form'
import skypeIcon from '../images/skype.png'
import styles from './Contact.module.css'

const Contact = () => {
    return (
        <Fragment>
            <Navbar/>
            <main>
        <div className={styles.container}>
            <section >
                <p >You are welcome to leave feedback, critique or just say hello.</p>
                
            </section>
            <section>
                <Form />
            </section>
            <section>
                <p>If you don't feel like filling forms, you can contact me via</p>
                <ul>
                    <li><img className="nav-item" src={skypeIcon} alt="github" />email</li>
                    <li><img className="nav-item" src={skypeIcon} alt="github" />phone</li>
                    <li><img className="nav-item" src={skypeIcon} alt="github" />linkedin</li>
                    <li><img className="nav-item" src={skypeIcon} alt="github" />skype</li>
                </ul>
            </section>
        </div>
    </main>
    <Footer />
        </Fragment>
    );
};

export default Contact;