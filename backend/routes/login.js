const express = require("express");
const router = express.Router();
const User = require("../models/users"); // Add this line


router.post("/login", async (req, res) => {
    try {
        const {email, password} = req.body;
        
        // Check if user exists in database
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ error: "User does not exist" });
        }
        
        // Check if password matches
        if (user.password !== password) {
            return res.status(401).json({ error: "Wrong password" });
        }
        
        // Login successful
        console.log("Login successful for:", email);
        res.status(200).json({ message: "Login really successful", userId: user._id });
        
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