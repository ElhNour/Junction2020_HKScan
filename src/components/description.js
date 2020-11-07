import React from 'react';
import './description.css';
import image from '../assets/img/bg.PNG';


export default class Description extends React.Component{

    render(){
        return(
            <div class="imgbox">
                <img src={image} alt="description"></img>
                <div> 
                  <p>HKScan is the leading Nordic food company with over<br></br>a hundred years’ experience in responsible meat production<br></br>and processing of high-class raw materials.<br></br>
                    </p>  
                    <button id="btn" onClick="https://www.hkscan.com/en/">
                        More about us!
                    </button>
                </div>
                
            </div>
        )
    }
        
}