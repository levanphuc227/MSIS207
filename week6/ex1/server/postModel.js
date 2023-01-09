const mongoose = require('mongoose');

const postsModel=mongoose.Schema({
    caption:String,
    user:String,
    Image:String
})

module.exports=  mongoose.model('posts',postsModel);
