import React, { useEffect, useState } from "react";
import Posts from "../../Components/Posts/Posts";

function Home() {
  const [posts, setPosts] = useState([]);

  const baseUrl = `https://jsonplaceholder.typicode.com`;

  useEffect(() => {
    // run only on first render
    getPosts();
  }, []);

  const getPosts = () => {
    fetch(`${baseUrl}/posts`)
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      })
      .catch((err) => console.error(err));
  };
  return (
    <div className="container" id="home">
      <Posts posts={posts} />
    </div>
  );
}

export default Home;
