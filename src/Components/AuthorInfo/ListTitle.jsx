import React from "react";
import Card from '../Card/Card';
import '../Card-List/CardList.css';



const TitleList = (post) => 
   (
    
        <div className="card-list">
          {post.map((postt) =>(
              <Card key = {postt.authorId} post = {postt.title} />
          ))}
         
        </div>
    );


export default TitleList;