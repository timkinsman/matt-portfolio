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
            <h3>Get in touch</h3>
            <p className="global-content">If you have any questions or want to collaborate please don't hesitate to get in touch.</p>
          </div>
          <div className="global-wrapper">
            <div className={styles["contact-grid"]}>
              <div>
                <h3>Email</h3>
                <h4><a className="global-border-thin" href="mailto:hello@matthewkinsman.com">hello@matthewkinsman.com</a></h4>
              </div>
              <div>
                <h3>Phone</h3>
                <h4><a className="global-border-thin" href="tel:+61424792708" target="_blank">+61 424 792 708</a></h4>
              </div>
              <div>
                <h3>Enquiries</h3>
                <h4><a className="global-border-thin" href="https://www.google.com.au/forms/about/" target="_blank">Client brief form</a></h4>
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
