import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

export function PostLists() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/posts")
      .then((response) => {
        setPosts(response.data);
      });
  }, []);

  return (
    <ul>
      {posts.map((value, index) => (
        <li key={index}>
          <Link to={`/posts/${index}`}>
            <h3>{value.title}</h3>
          </Link>
        </li>
      ))}
    </ul>
  );
}
