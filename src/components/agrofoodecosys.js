import React from 'react';
import './description.css';
import image from '../assets/img/bg1.png';

export default class Description extends React.Component{

    render(){
        return(
            <div class="imgbox">
                <img src={image} alt="agrofood"></img>
                <div> 
                    <h1>Agrofood Ecosystem®</h1>
                  <p id="p1">is a model for the company’s value chain and particularly for the contract<br></br>meat production. We will answer the meat-eating consumers’ need for more<br></br>
information by providing transparency, facts and support for a more<br></br>
environmentally friendly and ethical choice of meat.
                    </p>  
                    
                </div>
                
            </div>
        )
    }
        
    

}