import React from "react";
import "./Home.css";
import bg from "../assets/img/bg.PNG";

const Home = (props) => {
  return (
    <div className="home">
      <p>
        HKScan is the leading Nordic food company with over<br></br>a hundred
        years’ experience in responsible meat production<br></br>and processing
        of high-class raw materials.<br></br>
      </p>
      <button className="btn">Find more about us</button>
    </div>
  );
};

export default Home;
