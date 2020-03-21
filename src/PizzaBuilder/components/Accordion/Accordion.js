import React, { useState, useRef } from "react";
import Chevron from "./Chevron";
import ContentCard from '../AccordionContents/ContentCard';


import "./Accordion.scss";


function Accordion(props) {
  console.log(props);
  console.log(this);
  const [setActive, setActiveState] = useState( "" );
  const [setHeight, setHeightState] = useState( "0px" );
  const [setRotate, setRotateState] = useState( "accordion__icon" );
  const [cards, setCards] = useState( [] );

  const content = useRef(null);
  // setCards(
  //   cards = this.props.content
  // )
 
  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight*2}px`
    );
    setRotateState(
      setActive === "active" ? "accordion__icon" : "accordion__icon rotate"
    );
    
  }

  return (
    <div className="accordion__section">
      <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
      
        <p className="accordion__title">
          <span className='accordion__li'> {props.id}. 
          </span> 
          {props.title}
        </p>
        <Chevron className={`${setRotate}`} width={15} fill={"#FFFFFF"} />
      </button>
      <div
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        className="accordion__content"
      >
        <div
          className="accordion__text content__flex"
        > 
        {
          cards.map( card => (
          <ContentCard
          key={card.id}
          name={card.IngredientName}
          image={card.Image}
          price={card.UnitPrice}
          description={card.Description}
      />

      ))
      
      }
          </div>
      </div>
    </div>
  );
}

export default Accordion;


