import React from "react";
import "./Card.css";
const Card = (props) => {
  return (
    <div className="card-container">
      
      {/* <img className="img" alt='robots' src={props.monster.image}/> */}
      
  <h2>{props.author.firstName}  {props.author.lastName}</h2>
      
      
      
    </div>
  );
  
};
export default Card;
