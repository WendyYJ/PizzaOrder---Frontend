import React, { Fragment } from "react";
import "./Contact.scss";
import "../PageLayout/Style/TopHeader.scss";
import LinkHeader from "../PageLayout/Header/LinkHeader";
import ContactMap from "./ContactMap";
import ContactForm from "./ContactForm";
import ContactDetails from "./ContactDetails";
import PizzamenuSidebar from "../PageLayout/PizzamenuSidebar/PizzamenuSidebar";
import ShoppingCartSidebar from "../PageLayout/ShoppingCartSidebar/ShoppingCartSidebar";
import Footer from "../PageLayout/Footer/Footer";

const Contact = () => (
  <div className="contact-container">
      <PizzamenuSidebar />
      <ShoppingCartSidebar />
      <LinkHeader headername="Contact Us" />
      <div className="map-container">
        <ContactMap />
      </div>
      <div className="contactUs-container">
        <ContactForm />
        <ContactDetails />
      </div>
      <div className="footer-container">
       <Footer />
      </div>
  </div>
);

export default Contact;
