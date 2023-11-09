import React from "react";
import "./Post.css";

const Post = (props) => {
  return (
    <div className="post">
      <small>{props.userId}</small>
      <h2>{props.id}</h2>
      <h2>{props.title}</h2>
      <p>{props.body}</p>
    </div>
  );
};

export default Post;
