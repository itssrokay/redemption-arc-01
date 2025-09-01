const express = require("express");
const router = express.Router();

router.post("/login", (req, res) => {
    const {email, password} = req.body;
    console.log(email, password);
    res.send("Login successful");
});

module.exports = router;