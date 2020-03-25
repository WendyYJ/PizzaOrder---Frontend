import React from 'react';
import '../Style/Information.scss';
import icon1 from '../../asset/img/aboutus1.png';
import icon2 from '../../asset/img/aboutus2.png';
import icon3 from '../../asset/img/aboutus3.png';

function Information(props) {
  return (
    <section className="maincontainer">
      <div className="bigcontainer">
        <div className="infoheader">
          <h1>
            We are pizza maker, and our mission is to make cool pizza which
            feeds all your senses
          </h1>
          <div className="introcontent">
            <p>
              We perfer to rely on instinct and feel, measuring by hand, not by
              the gram. This is the authentic way to make pizza. Sure it's a
              little unrefined, but we're proud of that. it's pizza like this
              which feeds your sense of sharing, adding flavour to those
              occasions when you get together with friends and family And
              really, isn't that what it's all about? Because when pizza feeds
              all your senses, it's not just great, it's sensational.
            </p>
          </div>
        </div>

        <div className="infobody">
          <div className="topcontainer">
            <div className="carefulcontainer">
              <div className="carefulcontainer_image">
                <img src={icon1} height="50px" width="30px" alt="icon" />
              </div>
              <div className="carefulcontainer_header">
                <h1>We're Careful</h1>
              </div>
              <div className="carefulcontainer_body">
                <p>
                  The curst is stored in a separate container, on a seoarate
                  shelf in our fridge. The cheese, marinara sauce and pepperoni
                  are stored in a designated kit, and every pizza is freshly
                  backed on designated parchment paper in our ovens.
                </p>
              </div>
            </div>

            <div className="carefulcontainer">
              <div className="carefulcontainer_image">
                <img src={icon2} height="50px" width="30px" alt="icon" />
              </div>
              <div className="carefulcontainer_header">
                <h1>We're Certified</h1>
              </div>
              <div className="carefulcontainer_body">
                <p>
                  Our cheese-only and cheese-and-pepperoni gluten-free pizzas
                  are prepared using the procedures certified by the Gluten
                  Intolerance Group(GIG), and we take specific caution when
                  making these pizzas.
                </p>
              </div>
            </div>

            <div className="carefulcontainer">
              <div className="carefulcontainer_image">
                <img src={icon3} height="50px" width="30px" alt="icon" />
              </div>
              <div className="carefulcontainer_header">
                <h1>We're Creative</h1>
              </div>
              <div className="carefulcontainer_body">
                <p>
                  For those simply looking to reduce gluten in their diet, we
                  offer a Great Your Own pizza option. The cheese, pepperoni and
                  marinara come from our gluten-free kit, but all additional
                  toppings are stored at our standard make table.
                </p>
              </div>
            </div>
          </div>

          <div className="bottomcontainer">
            <div className="leftcontainer">
              <h1>
                From classic pizzaria profiles, to innovative ethnic selections
                or flavourful health conscious choices, all our products reflect
                our customers' desires.
              </h1>
            </div>

            <div className="rightcontainer">
              <p>
                With more than 40 recipes and more toppings than any other pizza
                franchise, our selection is unmatched. Our innovative menu
                ranges from basics, like classic pepperoni or ham and pineapple,
                to gourmet originals, like our primo pollo and grilled veggie
                and goat cheese.
              </p>

              <p>
                We know that better pizza starts with better quality, fresh
                ingredients. Our pepperoni is dry-cured, our mozzarella is
                rennet-free, our seafood is certified and none of our products
                contain artificial colours, flavours. With an extensive array of
                superior toppings, four distinct crusts and nine savoury sauces,
                we offer the choices our consumers demand-creating strong
                customer loyalty that leads to improve profitability
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Information;
