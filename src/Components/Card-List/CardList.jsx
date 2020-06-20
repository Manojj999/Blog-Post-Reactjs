import React from "react";
import Card from '../Card/Card';
import './CardList.css';



const CardList = (props) => 
   (
    
        <div className="card-list">
          {props.authors.map((author) => (
              <Card key = {author.id} author = {author} />
          ))}
         
        </div>
    );


export default CardList;
