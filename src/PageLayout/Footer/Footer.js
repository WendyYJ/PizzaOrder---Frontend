import React from 'react';
import TextField from '@material-ui/core/TextField';
import ArrowForwardSharpIcon from '@material-ui/icons/ArrowForwardSharp';
import './style/footer.scss';

const Footer = () => (
  <div className="footer">
    <div className="footer__insta">
      <p className="footer__insta__start">
        follow us on instagram
        <ArrowForwardSharpIcon className="footer__insta__arrow" />
        {' '}
        <span className="footer__insta__span">#margherita pizza</span>
      </p>
    </div>
    <div className="footer__sign-up">
      <p className="footer__sign-up__header">
        Sign up for the newsletter and get exclusive deals.
      </p>
      <form noValidate autoComplete="off">
        <TextField
          fullWidth
          id="outlined-basic"
          label="ENTER YOUR EAMIL ADDRESS TO GET IN TOUCH!"
          variant="outlined"
        />
        <button className="footer__sign-up__button">subscribe</button>
      </form>
    </div>
    <div>
      <p className="footer__contact-details">+34 9 368 7050</p>
      <p className="footer__contact-details-span">order@pizza.com</p>
    </div>
    <div className="footer__social-media">
      <h1 className="footer__social-media__break">- & -</h1>
      <ul className="footer__social-media__start">
        <li>
          <a href="https://www.facebook.com/">Facebook</a>
        </li>
        <li>
          <a href="https://twitter.com/?lang=en">Twitter</a>
        </li>
        <li>
          <a href="https://www.instagram.com/?hl=en">Instagram</a>
        </li>
        <li>
          <a href="https://www.pinterest.com.au/">Pinterest</a>
        </li>
        <li>
          <a href="https://www.flickr.com/">Flicker</a>
        </li>
      </ul>
    </div>
    <div className="footer__disclaimer">
      <p>Created with &#x2764; by Pizza Hackers &#x2022; All rights reserved</p>
    </div>
  </div>
);

export default Footer;
