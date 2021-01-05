const express = require('express');

const router = express.Router();
const Post= require('../model/Post');

//Gets all the posts
router.get('/',async(req,res)=> {
    try
    {
        const posts =await Post.find();
        res.json(posts);
    }
    catch(err)
    {
        res.json({message:err});
    }
});


//Submits a post
router.post('/',async (req,res) => {
    const post= new Post({
        title: req.body.title,
        description: req.body.description
    });
    try{
    const savedPosts = await post.save();
    res.json(savedPosts);
    }
    catch(err){
        res.json({message:err}); 
    }
});


//Get back a specific post
router.get('/:postId',async (req,res) => {
    try{
    const post= await Post.findById(req.params.postId)
    res.json(post);
    }
    catch(err)
    {
        res.json({message:err});
    }
})

//Delete a post
router.delete('/:postId', async (req,res) => {
    try{
    const remPost= await Post.remove({_id: req.params.postId })
    res.json(remPost);
    }
    catch(err)
    {
        res.json({message:err});
    }
})

//Update a post
router.patch('/:postId', async (req,res) => {
    try{
    const updPost= await Post.updateOne(
        {_id: req.params.postId },
        {$set: {title:req.body.title} })
    res.json(updPost);
    }
    catch(err)
    {
        res.json({message:err});
    }
})


module.exports = router;