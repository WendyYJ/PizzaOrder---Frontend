import React from "react";
import "../Style/RelatedProduct.scss";
import Salami from "../../asset/img/Salami.jpg";
import Shiitake from "../../asset/img/Shiitake.jpg";
import proni from "../../asset/img/proni.png";
import Vege from "../../asset/img/Vege.jpg";

const RelatedProduct = () => (
  <div className="relatedProduct-container">
    <h2>Related Products</h2>
    <div className="pizza">
      <img className="related" src={Salami} alt="pizza" />
      <h4>Florentine Ricotta</h4>
      <p>
        descriptdsasjdankasnd
        <br />
        ksandkjasndnkasnd
        <br />
        ksandkjasndnkasnd
        <br />
        ksandkjasndnkasnd
      </p>
      <h3>$18.00</h3>
    </div>
    <div className="pizza">
      <img className="related" src={Shiitake} alt="pizza" />
      <h4>Margherita</h4>
      <p>
        descriptdsasjdankasnd
        <br />
        ksandkjasndnkasnd
        <br />
        ksandkjasndnkasnd
        <br />
        ksandkjasndnkasnd
      </p>
      <h3>$16.00</h3>
    </div>
    <div className="pizza">
      <img className="related" src={proni} alt="pizza" />
      <h4>Vege Supreme</h4>
      <p>
        descriptdsasjdankasnd
        <br />
        ksandkjasndnkasnd
        <br />
        ksandkjasndnkasnd
        <br />
        ksandkjasndnkasnd
      </p>
      <h3>$22.00</h3>
    </div>
    <div className="pizza">
      <img className="related" src={Vege} alt="pizza" />
      <h4>Roast Beetroot</h4>
      <p>
        descriptdsasjdankasnd
        <br />
        ksandkjasndnkasnd
        <br />
        ksandkjasndnkasnd
        <br />
        ksandkjasndnkasnd
      </p>
      <h3>$21.00</h3>
    </div>
  </div>
);

export default RelatedProduct;
