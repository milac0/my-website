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
                    <li><a href="mailto:mile.balenovic@gmail.com?Subject=Hello"><img className="nav-item" src={mailIcon} alt="github" /><span>mile.balenovic@gmail.com</span></a></li>
                    <li><a href="tel:00385919182865"><img className="nav-item" src={phoneIcon} alt="phone" /><span>+385 91 918-2865</span></a></li>
                    <li><img className="nav-item" src={linkedinIcon} alt="linkedin" /><span>Mile Balenović</span></li>
                    <li><a href="skype:mbalenovic?chat"><img className="nav-item" src={skypeIcon} alt="skype" /><span>mbalenovic</span></a></li>
                </ul>
            </section>
        </div>
    </main>
    <Footer />
        </Fragment>
    );
};

export default Contact;