const mongoose =require('mongoose')

const shortVideoSchema =mongoose.Schema({
    url: String,
    channel: String,
    description:String,
    Song:String,
    likes:String,
    shares:String,
    messages:String
})
module.exports=  mongoose.model('shortVideos',shortVideoSchema);