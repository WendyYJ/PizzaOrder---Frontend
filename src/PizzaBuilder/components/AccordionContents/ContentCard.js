import React, { useState } from 'react';
import './ContentCard.scss';


class ContentCard extends React.Component{
    constructor(props){
        super(props);
    }

    state=
    {
        totalPrice:0,
        setSelected:'', 
   
    }
  

    
  toggleSelection= () => {
        this.setState({setSelected:this.state.setSelected===''?'card-selected':'',
                       totalPrice:this.state.totalPrice+=this.props.price})
        console.log(this.state.totalPrice)
    }
        render(){

    return(
            <div className={`content`} id={`${this.state.setSelected}`} onClick={this.toggleSelection}  >
                <img className='content__img' src ={this.props.image} alt={this.props.name}/>
                <h3 className='content__name'>{this.props.name}</h3>
                <p className='content__description'>  
                   {
                       this.state.setSelected === '' ?
                            this.props.description
                   : <div className='selected-tick'> &#x2714; </div>
                   }  
                </p>
                <p className='content__price'>${this.props.price}</p>
            </div>
        )
    
                }  
}
export default ContentCard;