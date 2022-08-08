import { useEffect, useState } from "react";
import { fetchAllPosts } from "../services/post.service";
import { Post } from "../types";
import { WeatherFore } from "./WeatherForecast";

export function Posts() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    getAllPosts();
  }, []);

  function getAllPosts() {
    fetchAllPosts().then((response) => setPosts(response.data));
  }

  return (
    <>
      <h1>React Exercise </h1>
      {posts.map((post) => (
        <li>
          {post.text} - {post.author}
        </li>
      ))}
    </>
  );
}
