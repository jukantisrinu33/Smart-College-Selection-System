const mongoose=require("mongoose");

const userpersonalSchema=new mongoose.Schema({
    passphoto:
    {
        url:String,
        filename:String
    },
    aadharnumber:
    {
        type:Number,
        required:true,
        min:100000000000,
        max:999999999999,
    },
    aadharImage:
    {
        url:String,
        filename:String
    },
    tenthMarks:
    {
        type:Number,
        required:true,
    },
    tenthImage:
    {
        url:String,
        filename:String

    },
    twelthMarks:
    {
        type:Number,
        required:true,
    },
    twelthImage:
    {
        url:String,
        filename:String

    },
    caste:
    {
        type:String,
        required:true
    },
    casteImage:
    {
        url:String,
        filename:String

    },
    incomeImage:
    {
        url:String,
        filename:String

    },
    physicallyHandicaped:
    {
        url:String,
        filename:String
    },

    jeeScore:{
        type:Number,
        required:true,
    },

    applyfor:{
        type:String,
        required:true,
    },

    applied:{
        type:Boolean,
    }





});

const userpersonals=mongoose.model("personalDetail",userpersonalSchema);
module.exports=userpersonals;