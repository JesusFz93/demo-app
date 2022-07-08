import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PostPage = () => {
  const [resp, setResp] = useState([]);
  const { idPost } = useParams();

  useEffect(() => {
    const obtenerPosts = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${idPost}`
      );
      const data = await response.json();
      setResp(data);
    };

    obtenerPosts();
  }, [idPost]);

  return (
    <>
      <header>
        <h1>Pagina de efectos</h1>

        <ul>
          {
            <li>
              <h1>{resp.id}</h1>
              <h2>{resp.title}</h2>
              <p>{resp.body}</p>
            </li>
          }
        </ul>
      </header>
    </>
  );
};

export default PostPage;
