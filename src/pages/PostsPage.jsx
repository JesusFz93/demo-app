import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const PostsPage = () => {
  const [resp, setResp] = useState([]);

  useEffect(() => {
    const obtenerPosts = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      setResp(data);
    };

    obtenerPosts();
  }, []);

  return (
    <>
      <header>
        <h1>Pagina de efectos</h1>

        <ul>
          {resp &&
            resp.map((post) => (
              <li key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
                <NavLink to={`/post/${post.id}`}>Ver mas...</NavLink>
              </li>
            ))}
        </ul>
      </header>
    </>
  );
};

export default PostsPage;
