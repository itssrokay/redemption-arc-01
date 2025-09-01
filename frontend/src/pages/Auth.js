import React from "react";
import "../../index.css";
import { useState } from "react";
export default function Auth(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleLogin = () => {
        console.log(email, password);
        //post
        fetch("http://localhost:3000/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({email, password}),
        })
        .then(res => res.json())
        .then(data => console.log(data));
    }
    const handleEmail = (e) => {
        console.log(e.target.value);
        setEmail(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }
    return(
        <div>
            <input placeholder="Enter your Email" className="input" value={email} onChange={handleEmail}></input>
        <input placeholder="Enter your Password" className="input" value={password} onChange={handlePassword}></input>
        <button className="button" onClick={handleLogin}>login</button>
        <button className="button">signup</button>
        </div>
        
    
    )
}   