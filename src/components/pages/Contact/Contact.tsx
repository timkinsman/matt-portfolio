import React from "react";
import Footer from "../../global/Footer/Footer";
import Navbar from "../../global/Navbar/Navbar";
import Socials from "./Socials/Socials";
import images from "../../../images/Emojis";
import styles from "./Contact.module.css";

function Contact() {
  return (
    <div className="global-fadein">
      <div className="global-main-container">
        <Navbar selected="contact" />
        <div className="global-container">
          <p className="global-title">Contact</p>
          <div className="global-wrapper">
            <h3>Get in touch</h3>
            <h4>If you have any questions or want to collaborate please don't hesitate to get in touch.</h4>
          </div>
          <div className="global-wrapper">
            <div className={styles["contact-grid"]}>
              <div>
                <img className={styles["contact-img"]} src={images.enquiries} />
                <h3>Enquiries</h3>
                <h4><a className="global-border-thin" href="https://www.google.com.au/forms/about/" target="_blank">Client brief form</a></h4>
              </div>
              <div>
                <img className={styles["contact-img"]} src={images.phone} />
                <h3>Phone</h3>
                <h4><a className="global-border-thin" href="tel:+61424792708" target="_blank">+61 424 792 708</a></h4>
              </div>
              <div>
                <img className={styles["contact-img"]} src={images.email} />
                <h3>Email</h3>
                <h4><a className="global-border-thin" href="mailto:hello@matthewkinsman.com">hello@matthewkinsman.com</a></h4>
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
