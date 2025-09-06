const express = require("express");
const router = express.Router();
const User = require("../models/user"); // Add this line
const jwt=require("jsonwebtoken");


router.post("/login", async (req, res) => {
    try {
        const {email, password} = req.body;
        
        // Check if user exists in database
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ error: "User does not exist" });
        }
        
        // Checking if password matches
        if (user.password !== password) {
            return res.status(401).json({ error: "Wrong password" });
        }
        
        // Login successful
        console.log("Login successful for:", email);
        const token=jwt.sign(
            {
                userId:user._id,email:user.email
            },
            process.env.JWT_SECRET,
            {expiresIn:"1h"}
        );
        console.log(token);
        res.json({token,message:"Login successful"});

        
    } catch (error) {
        console.log("Login error:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

router.post("/signup", async (req, res) => {
    try {
        const {email, password} = req.body;
        
        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: "User already exists" });
        }
        
        // Create new user
        const newUser = new User({ email, password });
        await newUser.save();
        
        console.log("New user created:", email);
        res.status(201).json({ message: "Signup successful", userId: newUser._id });
        
    } catch (error) {
        console.log("Signup error:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

module.exports = router;