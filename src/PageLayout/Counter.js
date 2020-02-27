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
    if(this.state.count > 0){
    this.setState(prevState => {
      return { count: prevState.count - 1 }
    })
  }
}
  
  // change code above this line
  render() {
    return (

   <div className="counterButton">
     <button className="buttonOne" style={{fontSize: "20px", color: "black", width: "30px", height: "30px", display: "inline-block"}} className='dec' onClick={this.decrementCount}>-</button>
     <span style={{fontSize: "20px", color: "white", width: "30px", height: "30px", display: "inline-block"}} className='blank'>{this.state.count}</span>
     <button className="buttonOne" style={{fontSize: "20px", color: "black", width: "30px", height: "30px",  display: "inline-block"}} className='inc' onClick={this.incrementCount}>+</button>
   </div>
    );
  }
};

export default Counter;