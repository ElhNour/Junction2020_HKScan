import React from 'react';
import bg from '../../assets/img/bg3.png';
import './Feedback.css';

export default class Feedback extends React.Component {


    /**
     * @property {{email:string,subject:string,mssg:string}} state -attributes of the class
     */
      state ={
        email : '',
        subject : '',
        mssg: ''
      };
     
      /**
       * @property {function} handleChangeInputQuestion -displays the input of the user in the textarea
       */
      handleChangeInputQuestion = event => {
          this.setState({email : event.target.value.email, subject : event.target.value.subject, mssg : event.target.value.mssg,  })
      }
    handleSubmit (){}   
   
      /**
       * @property {function} render -renders the questionForm component described bellow
       */
      render (){
        return (
           
                <form onSubmit={this.handleSubmit} id="form">
                 <div class=" input-group">
                <textarea class="form-control" aria-label="With textarea"name="email" onChange={this.handleChangeInputQuestion} placeholder="Email"></textarea>
                </div>
                <div class=" input-group">
                <textarea class="form-control" aria-label="With textarea"name="subject" onChange={this.handleChangeInputQuestion} placeholder="Subject"></textarea>
                </div>
                <div class=" input-group">
                <textarea class="form-control" aria-label="With textarea"name="mssg" onChange={this.handleChangeInputQuestion} id="mssg" placeholder="We are all ears!"></textarea>
                </div>
                
                <button type="submit" className="btn-send" name="Send">Send</button>
                </form>
                
                    
      );
      }
    }