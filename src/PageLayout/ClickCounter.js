import React, { Component } from 'react';

class ClickCounter extends Component {
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
  this.setState(prevState => {
    return { count: prevState.count - 1 }
  })
}

  render() {
    const { count } = this.state;

    return (
    <div className="clickCounter_button">
      <button
      onClick={this.incrementCount}>Clicked {count} times
      
      </button>

      <button 
      onClick={this.decrementCount}>Clicked {count} times
      
    </button>
    </div>
    );
  }
  
}

export default ClickCounter;