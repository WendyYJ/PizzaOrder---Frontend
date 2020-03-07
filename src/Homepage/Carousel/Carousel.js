import React from "react";
import Slider from "react-slick";
import "./Carousel.scss";
import periperi from "../../asset/img/PeriPeri.png";
import proni from "../../asset/img/proni.png";
import Carni from "../../asset/img/olive.jpg";
import mush from "../../asset/img/Shiitake.jpg";
import vegan from "../../asset/img/valentinos.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Carousel extends React.Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplaySpeed: 2000
    };
    return (
      <Slider {...settings}>
        <div>
          <div className="homepage__menu">
            <div className="homepage__menu-left">
              <h2 className="homepage__menu-heading">Peri-Peri</h2>

              <p className="homepage__menu-price">$18-$37</p>
              <p className="homepage__menu-more">
                Marinated Chicken Breast Fillets, Shallots, Roasted Capsicum,
                Caramelised Onions & Bocconicini on a Tomato base, topped with
                Peri-Peri sauce.
              </p>
              <p className="homepage__menu-button">order now</p>
            </div>
            <div className="homepage__menu-right">
              <img src={periperi} alt="Peri Peri Pizza" />
            </div>
          </div>
        </div>
        <div>
          <div className="homepage__menu">
            <div className="homepage__menu-left">
              <h2 className="homepage__menu-heading">Pepperoni</h2>

              <p className="homepage__menu-price">$17-$23</p>
              <p className="homepage__menu-more">
                Our singnature Pepperoni Pizza contains 834kJ a slice, which is
                pretty impressive given its comparably diminutive size. Please
                ordere this pizza with a standard 'classic crust'.
              </p>
              <p className="homepage__menu-button">order now</p>
            </div>
            <div className="homepage__menu-right">
              <img src={proni} alt="Pepperoni Pizza" />
            </div>
          </div>
        </div>
        <div>
          <div className="homepage__menu">
            <div className="homepage__menu-left">
              <h2 className="homepage__menu-heading">Shiitake Fusion</h2>

              <p className="homepage__menu-price">$14-$22</p>
              <p className="homepage__menu-more">
                Order one of the standard 12-inch pizza range。 If you wolf down
                a whole one, you'll have chewed up 75% of your average daily
                intake in a single meal.
              </p>
              <p className="homepage__menu-button">order now</p>
            </div>
            <div className="homepage__menu-right">
              <img src={mush} alt="Shiitake Pizza" />
            </div>
          </div>
        </div>
        <div>
          <div className="homepage__menu">
            <div className="homepage__menu-left">
              <h2 className="homepage__menu-heading">The Carnivore</h2>
              <p className="homepage__menu-price">$14-$22</p>
              <p className="homepage__menu-more">
                Some of you could easily wolf down a 12-inch pizza on your own.
                But with this meaty feast, you might want to reconsider. At
                1120kJ a slice, it's not for the faint-hearted.
              </p>
              <p className="homepage__menu-button">order now</p>
            </div>
            <div className="homepage__menu-right">
              <img src={Carni} alt="Carnivore Pizza" />
            </div>
          </div>
        </div>
        <div>
          <div className="homepage__menu">
            <div className="homepage__menu-left">
              <h2 className="homepage__menu-heading">Vegan Valentinos</h2>
              <p className="homepage__menu-price">$14-$22</p>
              <p className="homepage__menu-more">
                I’m not even that big of a cheese fan, but pizza just wasn’t
                pizza if there wasn’t a thick layer of mozzarella on top. Ya
                know? Thank goodness for me there is a 1-minute, homemade
                alternative to parmesan cheese. Vegan parmesan! Have you tried
                it?
              </p>
              <p className="homepage__menu-button">order now</p>
            </div>
            <div className="homepage__menu-right">
              <img src={vegan} alt="the Vegan Pizza" />
            </div>
          </div>
        </div>
      </Slider>
    );
  }
}

export default Carousel;
