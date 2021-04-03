import React from 'react';
import Footer from '../../layout/Footer/Footer';
import Navbar from '../../layout/Navbar/Navbar';
import Socials from '../../layout/Socials/Socials';

import styles from "./Contact.module.css";

function Contact() {
  return (
    <div className="global-fadein">
      <div className="global-container">
        <Navbar selected="contact" />
        <div className="global-inner-container">
          <p className="global-title">Contact</p>
          <div className="global-wrapper">
            <p className="global-header">Get in touch</p>
            <p className="global-content">If you have any questions or want to collaborate please don't hesitate to get in touch.</p>
          </div>
          <div className="global-wrapper">
            <div className={styles["content-space-between"]}>
              <div>
                <p className="global-header">Email</p>
                <a className={styles["contact-a"]} href="mailto:hello@matthewkinsman.com">hello@matthewkinsman.com</a>
              </div>
              <div>
                <p className="global-header">Phone</p>
                <p className="global-content">+61 424 792 708</p>
              </div>
              <div>
                <p className="global-header">Enquiries</p>
                <a className={styles["contact-a"]} href="https://www.google.com.au/forms/about/" target="_blank">Client brief form</a>
              </div>
            </div>
          </div>
          <Socials />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Contact;
