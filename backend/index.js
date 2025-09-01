const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
app.get("/", (req, res) => {
    res.send("Hello World");
});
app.post("/login", (req, res) => {
    const {email, password} = req.body;
    console.log(email, password);
    res.send("Login successful");
});