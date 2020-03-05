import React, { Component } from 'react';
import '.././PizzaMenu/Style/SampleMenu.scss';

class Counter extends Component {
  constructor(props){
    super(props)

  this.state = {
    count: 0
   }
 }
  
  incrementCount = () => {
    this.setState(prevState => {
      return { count: prevState.count + 1 }
    })
  }
  
  decrementCount = () => {
    if(this.state.count > 0){
    this.setState(prevState => {
      return { count: prevState.count - 1 }
    })
  }
}
  
  render() {
    return (
   <div className="counterButton">
     <button className='decButton' onClick={this.decrementCount}>-</button>
     <span className='count'>{this.state.count}</span>
     <button className='incButton' onClick={this.incrementCount}>+</button>
   </div>
    );
  }
};

export default Counter;