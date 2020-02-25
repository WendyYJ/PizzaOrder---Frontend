import React, { Component } from 'react';
import '.././PageLayout/Style/PageStyle.scss';

class Counter extends Component {
  constructor(props){
    super(props)

  this.state = {
    count: 0
   }
 }
  

  // change code below this line
  incrementCount = () => {
    this.setState(prevState => {
      return { count: prevState.count + 1 }
    })
  }
  
  decrementCount = () => {
    this.setState(prevState => {
      return { count: prevState.count - 1 }
    })
  }
  
  // change code above this line
  render() {
    return (

   <div className="counterButton">
     <button style={{fontSize: "20px", color: "black"}} className='dec' onClick={this.decrementCount}>-</button>
     <h1 style={{fontSize: "20px", color: "white"}} className='blank'>{this.state.count}</h1>
     <button style={{fontSize: "20px", color: "black"}} className='inc' onClick={this.incrementCount}>+</button>
   </div>
    );
  }
};

export default Counter;