import React, { Component } from "react";
import { Card } from "react-bootstrap";
import "../Card-List/CardList.css";
import "../Card/Card.css";



const AuthorDetails = ({ author }) => {
  return (
    <div>
      <Card style={{ width: "100%" }}>
        <Card.Body>
          <h1>Author Information</h1>
          <div>
            <h2 className="mb-3 text">Name : {author.firstName}  {author.lastName} </h2>
            <h2 className="mb-3 text">Total Post : {author.numPosts}</h2>
            <h2 className="mb-3 text">Total Likes:{author.numLikes}</h2>
            <h2 className="mb-3 text">Total Comment : {author.numComments}</h2>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

const AuthorPosts = ({ post }) => {
  return (
    <div>
      <h1>Author Posts</h1>
      <div className="card-list">
        {post.map((postt) =>
          <Card className="card-container">
        <Card.Body>
          <div>
            <h2 className="mb-3 text">{postt.title}</h2>
          </div>
        </Card.Body>
      </Card>
        )}
      </div>
    </div>
  );
};

class AuthorInfo extends Component {
  render() {
    return (
      <div>
        <div>
          <AuthorDetails author={this.props.author} />
        </div>
        <hr />
        <div>
          <AuthorPosts post={this.props.post} />
        </div>
      </div>
    );
  }
}

export default AuthorInfo;
