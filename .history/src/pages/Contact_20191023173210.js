import React, { Fragment } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Basic from '../components/Basic'
import styles from "./Contact.module.css";

import skypeIcon from "../images/skype.png";
import mailIcon from "../images/mail.png";
import linkedinIcon from "../images/linkedin-contact.png";
import phoneIcon from "../images/phone.png";

const Contact = (styles) => {
  return (
    <Fragment>
      <Navbar />
      <main>
        <div className={styles.container}>
            <h1>
              You are welcome to leave feedback, critique or just say hello.
            </h1>
          <section>
            <Basic />
          </section>
          <section className={styles.sectionOtherContact}>
            <p>If you don't feel like filling forms, you can contact me via</p>
            <ul>
              <li>
                <a href="mailto:mile.balenovic@gmail.com?Subject=Hello">
                  <img className="nav-item" src={mailIcon} alt="github" />
                  <span>mile.balenovic@gmail.com</span>
                </a>
              </li>
              <li>
                <a href="tel:00385919182865">
                  <img className="nav-item" src={phoneIcon} alt="phone" />
                  <span>+385 91 918-2865</span>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/mile-balenovi%C4%87-a4ab9188/">
                  <img className="nav-item" src={linkedinIcon} alt="linkedin" />
                  <span>Mile Balenović</span>
                </a>
              </li>
              <li>
                <a href="skype:mbalenovic?chat">
                  <img className="nav-item" src={skypeIcon} alt="skype" />
                  <span>mbalenovic</span>
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
