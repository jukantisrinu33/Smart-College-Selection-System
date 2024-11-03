const express=require("express");
const router=express.Router();
const passport=require("passport");
const User=require("../models/user");
const { isAuthenticated } = require("../itils/middlewares");
const userpersonals = require("../models/personals");
const aysncWrap=require("../itils/asyncwrap");



//signup page
router.get("/signup",(req,res,next)=>
{
    res.render("users/signup.ejs");
})

router.post("/signup",async (req,res,next)=>
{
try
{
    const {name,username,email,password}=req.body;
    const newUser=new User({name:name,username:username,email:email});
    const registerUser=await User.register(newUser,password)
    req.login(registerUser,(err)=>
    {
        if(err)
        {
            console.log("some error occured");
            req.flash("error","some error occured");
            return res.redirect("/login")
        }
        else
        {
            req.flash("success","User Registered Successfully");
            res.redirect("/SCSS");
        }
    })
}
catch(err)
{
    req.flash("error","some error occured");
    res.redirect("/signup");
}});
 




//login

router.get("/login",(req,res,next)=>
{
    res.render("users/login.ejs");
})


router.post("/login",passport.authenticate("local",{failureRedirect:"/login",failureFlash:true}),(req,res,next)=>
{
    req.flash("success","Logged in Successfully")
    res.redirect("/SCSS");
});


router.get("/logout",(req,res,next)=>
{
    req.logout((err)=>
    {
        if(err)
        {
            return next(err);
        }
        else
        {
            req.flash("success","Logged out Successfully")
            res.redirect("/SCSS");
        }
    })
});

router.delete("/deleteuser" ,isAuthenticated,async(req,res,next)=>{
    if(req.user){
        let userid=req.user._id;
        if(req.user.userPersonalId){
            let userPersonalId=req.user.personalsId;
            console.log(userPersonalId);
            await userpersonals.findByIdAndDelete(userPersonalId);
        }
        console.log(userid)
        await User.findByIdAndDelete(userid);
        req.flash("success","Account deleted successfully");
        res.redirect("/SCSS");
        
    }
})


module.exports=router;
