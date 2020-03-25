import React, { Fragment } from 'react';
import './Contact.scss';
import '../PageLayout/Style/TopHeader.scss';
import LinkHeader from '../PageLayout/Header/LinkHeader';
import ContactMap from './ContactMap';
import ContactForm from './ContactForm';
import ContactDetails from './ContactDetails';
import Footer from '../PageLayout/Footer/Footer';

const Contact = () => (
  <div className="contact-container">
    <LinkHeader headername="Contact Us" />
    <div className="map-container">
      <ContactMap />
    </div>
  <div className="outer-container">
    <div className="contactUs-container">
      <ContactForm />
    </div>
    <div className="contactDetail-container">
      <ContactDetails />
    </div>
  </div>
    <div className="footer-container">
      <Footer />
    </div>
  </div>
);

export default Contact;
