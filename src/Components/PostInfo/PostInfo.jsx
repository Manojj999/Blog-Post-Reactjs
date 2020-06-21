import React, { Component } from "react";

import "../Card-List/CardList.css";
import "../Card/Card.css";
import { Link } from "react-router-dom";
import Like from './Img/Like.png';
import comment from './Img/comment.png';
import './Post.css'

const PostDetails = ({ post }) => {
  const date = new Date(post.datePublished);
  return (
    <div>
    <article>
      <header className="bg-gold sans-serif">
        <div className="mw9 center pa4 pt5-ns ph7-l">
          <time className="f6 mb2 dib ttu tracked">
            <small>{date.toLocaleString()}</small>
          </time>
          <h3 className="f2 f1-m f-headline-l measure-narrow lh-title mv0">
            <span className="bg-black-90 lh-copy white pa1 tracked-tight">
              {post.title}
            </span>
          </h3>
          <h2 className="text"><img src={comment} alt='Comment'/> {post.numComments} </h2>
          <h2 className="text"><img src={Like} alt='Like'/> {post.numLikes} </h2>
        </div>
      </header>
      </article>

      <div>
        
        

        <div className="pa4 ph7-l georgia mw9-l center">
          <p className="f5 f3-ns lh-copy tc  georgia">{post.description}</p>
        </div>
      </div>
    </div>
  );
};

const Comments = ({ comment }) => {
  return (
    <div>
      <div>
        <h1>Comments:</h1>
        {comment.map((comm,i) => (
          <div key={i}>
            <h4 className="f3 fw1 georgia i">
            {comm.text}
            </h4>
             
              <Link to={`/author/${comm.authorId}`}>
                <h3 className="f6 ttu tracked black-80">-Author</h3>
              </Link>
            </div>
         
        ))}
      </div>
    </div>
  );
};

class PostInfo extends Component {
  render() {
    return (
      <div>
        <div className="bg-gold sans-serif">
          <div>
            <PostDetails post={this.props.post} />
          </div>

          <div>
            <Comments comment={this.props.comment} />
          </div>
        </div>
      </div>
    );
  }
}

export default PostInfo;
