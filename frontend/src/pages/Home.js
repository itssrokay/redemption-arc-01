import React from "react";

export default function Home(){
    function handleCreatePost(){
        fetch("http://localhost:3000/post/create",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "Authorization":"Bearer "+token
            }
        })
    }
  return(
    <div>
      <h4>Home page of Aryan</h4>
      <button onClick={handleCreatePost}>Create Post</button>
    </div>
    
  )
}