import React from 'react';
import ContentCard from './ContentCard';

class AccordionContent extends React.Component{
    // state=
    // {
    //     cards: []
    // }
    
    componentDidMount(){
        
        // const { cards } =  this.props.cards;
        // this.setState({cards});
        // console.log(cards);
           
    } 

    render(){
        return(
            <section className='content__flex'>
            {
                this.state.cards.map( card => (
                <ContentCard
                key={card.id}
                name={card.IngredientName}
                image={card.Image}
                price={card.UnitPrice}
                description={card.Description}
            />

            ))
            
            }
                
            </section>
            
        );
    }
}

export default AccordionContent;