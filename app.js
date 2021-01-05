const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser =  require("body-parser");
require('dotenv/config');

app.use(bodyParser.json());
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute)

app.get('/',(req,res)=> {
    res.send('We are on home'),
    console.log("On home!");
});


mongoose.connect(
    process.env.DB_Connection,
    { useNewUrlParser: true },() => 
console.log('Connected DB'));


app.listen(3000);