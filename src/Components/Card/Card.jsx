import React from "react";
import "./Card.css";
import {Link } from 'react-router-dom';
const Card = (props) => {
  return (
    <div className="card-container">
   
  <Link to={`/author/${props.author.id}`}>
  
  <h2>{props.author.firstName}  {props.author.lastName}</h2>
  
   </Link>
      
      
    </div>
  );
  
};
export default Card;
