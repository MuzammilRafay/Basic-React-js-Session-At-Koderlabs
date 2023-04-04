/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Posts from "../../Components/Posts/Posts";
import CreatePost from "../../Components/CreatePost/CreatePost";
import { baseUrl } from "../../utils/constant";
import CustomSpinner from "../../Components/CustomSpinner/CustomSpinner";

function Home() {
  const [posts, setPosts] = useState([]);
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    // run only on first render
    getPosts();
  }, []);

  const getPosts = async () => {
    setLoader(true);
    await fetch(`${baseUrl}/posts`)
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      })
      .catch((err) => console.error(err));
    setLoader(false);
  };

  const deletePostHandler = async (postId) => {
    if (window.confirm("Are you sure ?")) {
      setLoader(true);
      await fetch(`${baseUrl}/posts/${postId}`, {
        method: "DELETE",
      })
        .then((response) => {
          getPosts();
        })
        .catch((error) => console.error(error));

      setLoader(false);
    }
  };
  return (
    <div className="container" id="home">
      {loader && <CustomSpinner />}
      <CreatePost getPosts={getPosts} />
      <Posts posts={posts} deletePostHandler={deletePostHandler} />
    </div>
  );
}

export default Home;
