const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');


const userSchema=new mongoose.Schema({
    name:
    {
        type:String,
        required:true
    },
    email:
    {
        type:String,
        required:true
    },
    personalsId:
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"userpersonal"
    }
});
userSchema.plugin(passportLocalMongoose);
const user= mongoose.model('user', userSchema);
module.exports =user;