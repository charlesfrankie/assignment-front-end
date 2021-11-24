import React, { useEffect, useState } from 'react';
import Post from './Post';

const Posts = () => {
  const [Posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch('http://127.0.0.1:8000/api/posts');
      const data = await response.json();
      setPosts(data);
      setIsLoading(false);
    }

    fetchPosts();
  }, []);

  return (
    <div class='posts-container'>
      {isLoading && <h1> Loading... </h1>}
      {Posts.map((post) => (
        <Post post={post} />
      ))}
    </div>
  );
};

export default Posts;
