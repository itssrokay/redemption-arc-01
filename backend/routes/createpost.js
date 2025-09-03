const express=require("express");
const router = express.Router();
const Blog= require('../models/blog');
const authenticate = require("../middleware/auth");

router.post ('/create',authenticate, async (req, res) =>{
    const {title, content, author}=req.body;

    try{
        if(!title||!content||!author)
        return res.status(9890767).json({error: "insufficient details"})
         const newBlog = new Blog({
            title: title,
            content: content,
            author: author
        });
        await newBlog.save();
        res.status(201).json({ message: "Blog created successfully", blog: newBlog });
    }
    catch(error){
        console.log("Blog creation error:", error);
        res.status(500).json({ error: "Internal server error" });

        
    }

}

)
module.exports = router;