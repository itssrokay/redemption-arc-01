import React, { useState } from "react";

export default function Home() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [message, setMessage] = useState("");

  async function handleCreatePost(e) {
    e.preventDefault();
    const token = localStorage.getItem("token");

    if (!token) {
      setMessage("You must be logged in to create a post.");
      return;
    }

    try {
     
      const userId = "68b5f10f99e802f9dc236870"; 

      const res = await fetch("http://localhost:3000/post/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify({
          title,
          content,
          author: userId, 
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to create post");
      }

      const data = await res.json();
      setMessage(" Post created successfully!");
      setTitle("");
      setContent("");
      console.log("Response:", data);
    } catch (err) {
      console.error(err);
      setMessage(" Could not create post");
    }
  }

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto" }}>
      <h4>Home page of Aryan</h4>
      <form onSubmit={handleCreatePost}>
        <input
          type="text"
          placeholder="Post title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
        />
        <textarea
          placeholder="Post content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
        />
        <button type="submit">Create Post</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}
