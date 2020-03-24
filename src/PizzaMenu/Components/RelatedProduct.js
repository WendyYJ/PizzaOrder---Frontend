import React from 'react';
import '../Style/RelatedProduct.scss';
import Salami from '../../asset/img/Salami.jpg';
import Shiitake from '../../asset/img/Shiitake.jpg';
import proni from '../../asset/img/proni.png';
import Vege from '../../asset/img/Vege.jpg';

const RelatedProduct = () => (
  <div className="relatedProduct-container">
     <div className="title-container">
     <h2 className="related-title">Related Products</h2>
    </div>

    <div className="pizza-container">
      <div className="relatedImg-container">
       <img className="relatedImg" src={Salami} alt="pizza" />
      </div>

      <div className="pizzaName-container">
       <h4 className="pizzaName">Florentine Ricotta</h4>
      </div>

      <div className="pizzaDescription-container">
       <p className="pizzaDescription">
        descriptdsasjdankasnd
        <br />
        ksandkjasndnkasnd
        <br />
        ksandkjasndnkasnd
        <br />
        ksandkjasndnkasnd
      </p>
      </div>

      <div className="pizzaPrice-container">
       <h3 className="pizzaPrice">$18.00</h3>
      </div>

    </div>


    <div className="pizza-container">

      <div className="relatedImg-container">
       <img className="relatedImg" src={Shiitake} alt="pizza" />
      </div>

      <div className="pizzaName-container">
       <h4 className="pizzaName">Margherita</h4>
      </div>

      <div className="pizzaDescription-container">
       <p className="pizzaDescription">
        descriptdsasjdankasnd
        <br />
        ksandkjasndnkasnd
        <br />
        ksandkjasndnkasnd
        <br />
        ksandkjasndnkasnd
      </p>
      </div>

      <div className="pizzaPrice-container">
       <h3 className="pizzaPrice">$16.00</h3>
      </div>
    </div>


    <div className="pizza-container">
      <div className="relatedImg-container">
       <img className="relatedImg" src={proni} alt="pizza" />
      </div>
     
      <div className="pizzaName-container">
       <h4 className="pizzaName">Vege Supreme</h4>
      </div>

      <div className="pizzaDescription-container"> 
        <p className="pizzaDescription">
          descriptdsasjdankasnd
          <br />
          ksandkjasndnkasnd
          <br />
          ksandkjasndnkasnd
          <br />
          ksandkjasndnkasnd
        </p>
      </div>
     
     <div className="pizzaPrice-container">
      <h3 className="pizzaPrice">$22.00</h3>
    </div>

    </div>


    <div className="pizza-container">
      <div className="relatedImg-container">
       <img className="relatedImg" src={Vege} alt="pizza" />
      </div>

      <div className="pizzaName-container">
       <h4 className="pizzaName"> Roast Beetroot</h4>
      </div>
      
      <div className="pizzaDescription-container">
       <p className="pizzaDescription">
        descriptdsasjdankasnd
        <br />
        ksandkjasndnkasnd
        <br />
        ksandkjasndnkasnd
        <br />
        ksandkjasndnkasnd
      </p>
      </div>

      <div className="pizzaPrice-container">
       <h3 className="pizzaPrice">$21.00</h3>
      </div>
    </div>
  </div>
);

export default RelatedProduct;
