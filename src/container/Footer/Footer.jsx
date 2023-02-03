import React from "react";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import { FooterOverlay, Newsletter } from "../../components";
import { images } from "../../constants";

import "./Footer.css";

const Footer = () => (
  <div className="app__footer section__padding">
    <FooterOverlay />
    <Newsletter />
    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">9 W 53rd St, New York, NY 10019, USA</p>
        <p className="p__opensans">+123 345 6789</p>
        <p className="p__opensans">+123 355 6785</p>
      </div>
      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="logo" />
        <p className="p__opensans">
          "The best way to find yourself is to lose yourself in the service of
          others"
        </p>
        <img
          src={images.spoon}
          alt="spoon image"
          className="spoon__img"
          style={{ marginTop: 15 }}
        />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>
      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Mon - Fri: </p>
        <p className="p__opensans">08:00am - 12:00am</p>
        <p className="p__opensans">Sat - Sun</p>
        <p className="p__opensans">07:00am - 11:00pm</p>
      </div>
    </div>
    <div className="footer__copyright">
      <p className="p__opensans">2021 Gericht. All Rights Reserved</p>
    </div>
  </div>
);

export default Footer;
