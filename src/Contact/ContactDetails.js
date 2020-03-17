import React from 'react';
import './Contact.scss';

const ContactDetails = () => (
  <div className="contactDetails-container">
    <div className="GetInTouch">
      <h2>Get in Touch</h2>
      <p>
        Phone:
        <span>+34 9 368 7050</span>
      </p>
      <p>
        Email:
        <span>order@pizza.com</span>
      </p>
      <br />
    </div>

    <div className="StoreAddress">
      <h2>Store Address</h2>
      <h3>CENTRO COMERCIAL LAS GLORIAS</h3>
      <p>Avinguda Diagonal, 206</p>
      <p>Barcelona, Spain</p>
      <br />
    </div>

    <div className="WorkingHours">
      <h2>Working Hours</h2>
      <p>Tuesday: 10:00-21:00</p>
      <p>Wednesday: 10:00-21:00</p>
      <p>Thursday: 10:00-21:00</p>
      <p>Friday: 10:00-21:00</p>
      <p>Saturday: 12:00-19:00</p>
      <p>Sunday/Monday: Closed</p>
    </div>
  </div>
);

export default ContactDetails;
