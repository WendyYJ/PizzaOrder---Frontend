import React from 'react';
import axios from 'axios';
import SauceCard from './SauceCard';

class Sauces extends React.Component{
    state=
    {
        sauces: []
    }
    
    componentDidMount(){
        axios.get('http://pizzadeploy-env.dn37p3zqw3.ap-southeast-2.elasticbeanstalk.com/ingredient/SAUCES')
            .then(response => {
                const sauces = response.data.data;
                this.setState({sauces});
                console.log(this.state.sauces);
            })
    } 

    render(){
        return(
            <section className='sauce__flex'>
            {
                this.state.sauces.map( sauces => (
                <SauceCard
                key={sauces.id}
                name={sauces.IngredientName}
                image={sauces.Image}
                price={sauces.UnitPrice}
                description={sauces.Description}
            />

            ))
            
            }
                
            </section>
            
        );
    }
}

export default Sauces;