import {useParams} from 'react-router-dom';
import {useEffect, useState} from "react";
import axios from "axios";

export function Post() {
  const [post, setPost] = useState({});
  const {slug} = useParams();

  useEffect(() => {
    axios.get("http://localhost:8080/api/posts/" + slug)
      .then((response) => {
        setPost(response.data);
      });
  }, []);

  const {title, description} = post;

  return (
    <div style={{padding: 20}}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}