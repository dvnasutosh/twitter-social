const express = require("express")
const env=require('dotenv')
const path= require("path")
const exp =express();
env.config()

exp.get('/',(req,res)=>{

    res.status(200).send("Working")
    })
/**
 * Experiment to send html file
 */
exp.get('/',(req,res)=>{

    res.status(200).sendFile(`ind.html`,{
        root: path.join(__dirname)
    });
})
//User related routes
exp.get("/api/v1/user/basics",(req,res)=>{
    res.send("user/basics working")
})
exp.get("/api/v1/user/followers",(req,res)=>{
    res.send("/user/followers working");
})
exp.get("/api/v1/user/followings",(req,res)=>{
    res.send("/user/followings working");
})
exp.get("/api/v1/user/likes",(req,res)=>{
    res.send("/user/likes working");
})
exp.get("/api/v1/user/tweets",(req,res)=>{
    res.send("/user/tweets working");
})

//Tweet related Routes
exp.get("/api/v1/tweet/basics",(req,res)=>{
    res.send("/tweet/basic working");
})
exp.get("/api/v1/tweet/likes",(req,res)=>{
    res.send("/tweet/likes working");
})
exp.get("/api/v1/tweet/replies",(req,res)=>{
    res.send("/tweet/replies working");
})
exp.get("/api/v1/tweet/retweets",(req,res)=>{
    res.send("/tweet/retweet working")
})
git 



exp.listen(process.env.PORT,()=>{
    console.log(`server is running on port ${process.env.PORT}`)
})