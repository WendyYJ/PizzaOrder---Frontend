import React from 'react';
import './style/homepage.scss';
import { Link } from 'react-router-dom';
import Information from '../AboutUs/components/Infomation';
import profile from '../asset/img/proni.png';
import phone from '../asset/img/screen.jpg';
import Ingredient from '../PageLayout/Footer/Ingredient';
import Carousel from './components/Carousel';
import Footer from '../PageLayout/Footer/Footer';
import { PIZZABUILDER_URL, PIZZAMENU_URL } from '../routes/URLMap';

const Homepage = () => (
  <div className="homepage">
    <main className="homepage__welcome">
      <h1 className="homepage__welcome-heading">Get it while it's hot!</h1>
      <span className="homepage__welcome-span">
        We create custom, personal pizzas with quality ingredients in only five
        minutes.
      </span>
      <Link to={PIZZAMENU_URL} className="homepage__welcome-button">
        order online
      </Link>
    </main>

    <Information />
    <div id="carousel">
      <Carousel />
    </div>

    <div className="homepage__pizza-builder">
      <div className="homepage__pizza-builder__container">
        <h2 className="homepage__pizza-builder__heading">
          Build Your Own Pizza
        </h2>
        <p className="homepage__pizza-builder__heading-span">
          Lorem ipsum dolor sit amet, conse et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in rep
        </p>
        <ul>
          <li className="homepage__pizza-builder__process">
            <span className="homepage__pizza-builder__process-number">1.</span>
            &emsp; Choose Your Crust
            {' '}
          </li>
          <li className="homepage__pizza-builder__process">
            <span className="homepage__pizza-builder__process-number">2.</span>
            &emsp;Select Your Sauce
            {' '}
          </li>
          <li className="homepage__pizza-builder__process">
            <span className="homepage__pizza-builder__process-number">3.</span>
            &emsp;Add Cheese
            {' '}
          </li>
          <li className="homepage__pizza-builder__process">
            <span className="homepage__pizza-builder__process-number">4.</span>
            &emsp;Choose Your Toppings
            {' '}
          </li>
        </ul>
      </div>
      <Link to={PIZZABUILDER_URL} className="homepage__pizza-builder-button">
        create your own pizza
      </Link>
    </div>

    <div className="homepage__linebreaker">
      <Ingredient />
    </div>

    <div className="homepage__comment">
      <h2 className="homepage__comment-heading">
        Here's what some customers are saying...
      </h2>
      <p className="homepage__comment-heading-span">
        customer service and product quality are our top priority. Although we
        strive to make every customer experience as easy as possible, it's how
        our customers rate us that really matters. Because it makes our
        customers happy! And we love making people happy.
      </p>
      <div className="homepage__comment__details">
        <div className="homepage__comment__details-container">
          <div className="homepage__comment__details-wrapper">
            <div>
              <img
                className="homepage__comment__details-profile"
                src={profile}
                alt="profile"
              />
            </div>
            <h3 className="homepage__comment__details-dish">
              Floretieno Retitora
            </h3>
            <p className="homepage__comment__details-rating">
              &#9733; &#9733; &#9734; &#9734; &#9734;
            </p>
          </div>
          <div>
            <p className="homepage__comment__details-bubble">
              " We are serving pizza, your pizza is the fave of our family. Pick
              us as the pizza winner!
            </p>
            <p className="homepage__comment__details-name">Jenice Black</p>
            <p className="homepage__comment__details-origin">
              www.tripAdvisor.com
            </p>
          </div>
        </div>

        <div className="homepage__comment__details-container">
          <div>
            <div>
              <img
                className="homepage__comment__details-profile"
                src={profile}
                alt="profile"
              />
            </div>
            <h3 className="homepage__comment__details-dish">Garlic Chicken</h3>
            <p className="homepage__comment__details-rating">
              &#9733; &#9733; &#9733; &#9734; &#9734;
            </p>
          </div>
          <div>
            <p className="homepage__comment__details-bubble">
              " We are serving pizza, your pizza is the fave of our family. Pick
              us as the pizza winner!
            </p>
            <p className="homepage__comment__details-name">Daneirl Black</p>
            <p className="homepage__comment__details-origin">
              www.pizzatempo.com
            </p>
          </div>
        </div>

        <div className="homepage__comment__details-container">
          <div>
            <div>
              <img
                className="homepage__comment__details-profile"
                src={profile}
                alt="profile"
              />
            </div>
            <h3 className="homepage__comment__details-dish">
              Kimchi BBQ Chicken
            </h3>
            <p className="homepage__comment__details-rating">
              &#9733; &#9733; &#9733; &#9733; &#9733;
            </p>
          </div>
          <div>
            <p className="homepage__comment__details-bubble">
              " We are serving pizza, your pizza is the fave of our family. Pick
              us as the pizza winner!
            </p>
            <p className="homepage__comment__details-name">Merty white</p>
            <p className="homepage__comment__details-origin">
              www.pizzaroo.com
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="homepage__app">
      <div className="homepage__app-container">
        <img src={phone} alt="phone" />
        <div className="homepage__app-content">
          <h2 className="homepage__app-content-heading">
            Get the newest version of our mobile app for your phone.
          </h2>
          <span className="homepage__app-content-span">
            Do you have an iPhone, Android device or on an web-enabled mobile?
            Then it's easier that ever to order hot and fresh pizza - no phone
            calls are necessary! Mobile ordering lets you access all the best
            features in a format that is tailored to the screen size of your
            mobile phone, find special online offers and order your favorite
            pizza and sides in a flash.
          </span>
          <h3 className="homepage__app-content-subheading">
            Here's why it's great:
          </h3>
          <div className="homepage__app-content-listing">
            <p>It's free</p>
            <p>No registration required</p>
            <p>Order from the full menu</p>
            <p>Find local deals </p>
            <p>Pay directly from the app</p>
          </div>
          <div className="homepage__app-content-download">
            <p>download iphone app</p>
            <p>download android app</p>
          </div>
        </div>
      </div>
    </div>

    <div className="homepage__news">
      <h2 className="homepage__news-heading"> Latest News & Recipes</h2>
      <div className="homepage__news__container">
        <div className="homepage__news-content">
          <img
            className="homepage__news-content-picture"
            src={profile}
            alt="profile"
          />
          <p className="homepage__news-content-time">January 22, 2019</p>
          <h3 className="homepage__news-content-heading">
            Perfect Pizza Using Baking Steel Broiler Method
          </h3>
          <p className="homepage__news-content-span">
            elementum integer enim. Sed eget velit aliquet. Scelerisque varius
            morbi enim nunc faucibus a. Neque volutpat ac tincidunt vitae.
          </p>
          <p className="homepage__news-content-button">read more</p>
        </div>

        <div className="homepage__news-content">
          <img
            className="homepage__news-content-picture"
            src={profile}
            alt="profile"
          />
          <p className="homepage__news-content-time">Feburary 8, 2019</p>
          <h3 className="homepage__news-content-heading">
            Brussels Sprouts, Pepper and Bacon Hot Pizza is HERE!
            {' '}
          </h3>
          <p className="homepage__news-content-span">
            elementum integer enim. Sed eget velit aliquet. Scelerisque varius
            morbi enim nunc faucibus a. Neque volutpat ac tincidunt vitae.
          </p>
          <p className="homepage__news-content-button">read more</p>
        </div>

        <div className="homepage__news-content">
          <img
            className="homepage__news-content-picture"
            src={profile}
            alt="profile"
          />
          <p className="homepage__news-content-time">December 18, 2019</p>
          <h3 className="homepage__news-content-heading">
            Green Capsicum & Blue Cheese Recipe
          </h3>
          <p className="homepage__news-content-span">
            elementum integer enim. Sed eget velit aliquet. Scelerisque varius
            morbi enim nunc faucibus a. Neque volutpat ac tincidunt vitae.
          </p>
          <p className="homepage__news-content-button">read more</p>
        </div>
      </div>
    </div>
    <div className="homepage__footer">
      <Footer />
    </div>
  </div>
);

export default Homepage;
