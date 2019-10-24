import React, { Fragment } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FormContact from '../components/FormContact'
import styles from "./contact.module.css";

import skypeIcon from "../images/skype.png";
import mailIcon from "../images/mail.png";
import linkedinIcon from "../images/linkedin-contact.png";
import phoneIcon from "../images/phone.png";

const Contact = () => {
  return (
    <Fragment>
      <Navbar />
      <main>
        <div className={styles.container}>
            <h1>
              You are welcome to leave feedback or just say hello,
            </h1>
          <section>
            <FormContact />
          </section>
          <section className={styles.otherContacts}>
            <h1>or if you don't feel like filling the forms, contact me via</h1>
            <ul className={styles.contacts}>
              <li>
                <a className={styles.contactItem} href="mailto:mile.balenovic@gmail.com?Subject=Hello">
                  <img src={mailIcon} alt="github" />
                  <span className={styles.contactBody}>mile.balenovic@gmail.com</span>
                </a>
              </li>
              <li>
                <a className={styles.contactItem} href="tel:00385919182865">
                  <img src={phoneIcon} alt="phone" />
                  <span className={styles.contactBody}>+385 91 918-2865</span>
                </a>
              </li>
              <li>
                <a className={styles.contactItem} href="https://www.linkedin.com/in/mile-balenovi%C4%87-a4ab9188/">
                  <img src={linkedinIcon} alt="linkedin" />
                  <span className={styles.contactBody}>Mile Balenović</span>
                </a>
              </li>
              <li>
                <a className={styles.contactItem} href="skype:mbalenovic?chat">
                  <img src={skypeIcon} alt="skype" />
                  <span className={styles.contactBody}>mbalenovic</span>
                </a>
              </li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </Fragment>
  );
};

export default Contact;
