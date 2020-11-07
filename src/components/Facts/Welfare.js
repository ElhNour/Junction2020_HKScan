import React from "react";
import "./Welfare.css";

const Welfare = () => {
  return (
    <div>
      <div className="welfare">
        <h1>Animal Welfare</h1>
      </div>
      <div>
        <div className="welfare2"></div>

        <ul className="welfare-info">
          <li>Good feeding</li>
          <li>Good feeding</li>
          <li>Good feeding</li>
          <li>Good feeding</li>
        </ul>
      </div>
      <div>
        <div className="welfare3"></div>

        <p className="welfare-cv">
          Digitally monitored and controlled feeding and managements practices
          can positively influence animal health and performance HKScan’s
          special interest include
          <br></br>- movement of animals
          <br></br>- effect of enrichments for animal welfare Use of computer
          vision with a deep learning based model
        </p>
      </div>
      <div>
          <div className="tech">
          <h2>Our techolgy</h2>
          <div className="techImg"></div>
          </div>
          
          <h2>Solution</h2>
          <div className="sol"></div>
      </div>
    </div>
  );
};
export default Welfare;
