import React, { Fragment } from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Form from '../components/Form'
import styles from './Contact.module.css'

import skypeIcon from '../images/skype.png'
import mailIcon from '../images/mail.png'
import linkedinIcon from '../images/linkedin-contact.png'
import phoneIcon from '../images/phone.png'

const Contact = () => {
    return (
        <Fragment>
            <Navbar />
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
                    <li><img className="nav-item" src={mailIcon} alt="github" /><span>email</span></li>
                    <li><img className="nav-item" src={phoneIcon} alt="phone" />phone</li>
                    <li><img className="nav-item" src={linkedinIcon} alt="linkedin" />linkedin</li>
                    <li><img className="nav-item" src={skypeIcon} alt="skype" />skype</li>
                </ul>
            </section>
        </div>
    </main>
    <Footer />
        </Fragment>
    );
};

export default Contact;