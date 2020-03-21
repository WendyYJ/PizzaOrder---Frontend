import React from 'react';


class AccordionContent extends React.Component{
    state=
    {
        cards: []
    }
    
    componentDidMount(){
        
        const { cards } =  this.props.cards;
        this.setState({cards});
        console.log(cards);
           
    } 

    render(){
        return(
            <section className='content__flex'>
           
            </section>
            
        );
    }
}

export default AccordionContent;