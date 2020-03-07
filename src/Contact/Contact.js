import React, { Fragment } from "react";
import "./Contact.scss";
import "../PageLayout/Style/TopHeader.scss";
import SecondaryHeader from "../PageLayout/Header/SecondaryHeader";
import ContactMap from "./ContactMap";
import ContactForm from "./ContactForm";
import ContactDetails from "./ContactDetails";
import PizzamenuSidebar from "../PageLayout/PizzamenuSidebar/PizzamenuSidebar";

const Contact = () => (
  <div className="contact-container">
    <>
      <PizzamenuSidebar />
      <SecondaryHeader headername="Contact Us" />
      <div className="map-container">
        <ContactMap />
      </div>
      <div className="contactUs-container">
        <ContactForm />
        <ContactDetails />
      </div>
    </>
  </div>
);

export default Contact;
