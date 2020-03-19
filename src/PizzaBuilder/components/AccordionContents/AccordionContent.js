import React from 'react';
import axios from 'axios';
import ContentCard from './ContentCard';

class AccordionContent extends React.Component{
    state=
    {
        contents: []
    }
    
    componentDidMount(){
        axios.get('http://pizzadeploy-env.dn37p3zqw3.ap-southeast-2.elasticbeanstalk.com/ingredient/SAUCES')
            .then(response => {
                const contents = response.data.data;
                this.setState({contents});
            })
    } 

    render(){
        return(
            <section className='content__flex'>
            {
                this.state.contents.map( content => (
                <ContentCard
                key={content.id}
                name={content.IngredientName}
                image={content.Image}
                price={content.UnitPrice}
                description={content.Description}
            />

            ))
            
            }
                
            </section>
            
        );
    }
}

export default AccordionContent;