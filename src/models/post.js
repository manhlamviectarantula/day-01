const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true 
    },
    content:{
        type: String,
        required: true
    },
    imageUrl:{
        type:String,
        required: true 
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true 
    }
})

module.exports = mongoose.model('post', postSchema)