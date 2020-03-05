import React from 'react';
import './Contact.scss';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: null,
      subject: '',
      message: ''
    };
  }

  messageChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }

  messageSubmitHandler = (event) => {
    event.preventDefault();
    alert("You are submitting " + this.state.message);
  }
 
render(){
  return (
    <div className="contact-form">
      <h1>Feelfree to contact us with any questions!</h1>
      <p className="text">
        If you have questions or comments, please get a hold of us in whichever <br></br>
        way is most convenient. Typi non habent daritatem insitam est usus legentis <br></br>
        in its qui facit eorum daritatem. 
      </p>
      <div className="messageForm-container">
      <div className="name-input">
        <p className="name">YOUR NAME*</p>
          <input
            type='text'
            name='username'
            onChange={this.messageChangeHandler}
          />
        </div>
        <div className="email-input">
          <p className="email">EMAIL*</p>
          <input
            type='text'
            name='email'
            onChange={this.messageChangeHandler}
          />
        </div>
      </div>
      <div className="messageForm-containerTwo">
      <div className="subject-input">
        <p className="subject">SUBJECT</p>
          <input
            type='text'
            name='subject'
            onChange={this.messageChangeHandler}
          />
        </div>

      <div className="message-form">
          <p>YOUR MESSAGE</p> 
          <input
            type='text'
            onChange={this.messageSubmitHandler}
          />
        </div>
      </div>
        <div className="send-btn">
          <br></br>
          <button type='submit'>SEND MESSAGE</button>
      </div>
    </div>
  )
}
}

export default ContactForm;