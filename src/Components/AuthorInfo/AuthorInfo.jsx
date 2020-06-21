import React, { Component } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import "../Card-List/CardList.css";
import "../Card/Card.css";
import { Link } from "react-router-dom";
import Like from '../PostInfo/Img/Like.png';
import comment from '../PostInfo/Img/comment.png';
import '../PostInfo/Post.css';

const AuthorDetails = ({ author }) => {
  return (
    <div>
      <h1>Author Information</h1>
      <div>
        <h2 className="mb-3 text">
          Name : {author.firstName} {author.lastName}
        </h2>
        <h2 className="mb-3 text">Total Post : {author.numPosts}</h2>
        <h2 className="mb-3 text"><img src={Like} alt='Like'/> : {author.numLikes}</h2>
        <h2 className="mb-3 text"><img src={comment} alt='Comment'/> : {author.numComments}</h2>
      </div>
    </div>
  );
};

const AuthorPosts = ({ post }) => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignContent: "center",
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        <h1 className="ma3">Author Posts</h1>

        <DropdownButton
          className="ma3"
          id="dropdown-item-button"
          title="View By"
        >
          <Dropdown.Item as="button">Date</Dropdown.Item>
          <Dropdown.Item as="button">Likes</Dropdown.Item>
        </DropdownButton>
      </div>
      <br />
      <div className="card-list">
        {post.map((postt,i) => (
          <div className="card-container" key={i}>
            <Link to={`/author/${postt.authorId}/${postt.id}`}>
              <h2 className="mb-3 text">{postt.title}</h2>
            </Link>
          </div>
        ))}
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
          <AuthorPosts  post={this.props.post} />
        </div>
      </div>
    );
  }
}

export default AuthorInfo;
