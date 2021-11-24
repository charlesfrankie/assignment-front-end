import React from 'react';

const Post = ({ post }) => {
  return (
    <div class='post' key={post.id}>
      <h3> {post.title} </h3>
      <small>
        Author: <strong>{post.user.name}</strong>{' '}
      </small>
      <br></br>
      <small>
        Category: <strong> {post.category.name} </strong>{' '}
      </small>
      <br></br>
      <small> Date: {new Date(post.created_at).toUTCString()} </small>
      <p> {post.content} </p>
    </div>
  );
};
export default Post;
