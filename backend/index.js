const express = require("express");
const cors = require("cors");
const app = express();
const mongoose= require("mongoose");
app.use(cors());
app.use(express.json());
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
app.get("/", (req, res) => {
    res.send("Hello World");
});
app.use("/auth", require("./routes/login"));