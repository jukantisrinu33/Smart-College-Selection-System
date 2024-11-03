require('dotenv').config();
const express=require("express");
const ejs=require("ejs");
const methodOverride=require("method-override");
const mongoose=require("mongoose");
const path=require("path");
const ejsMate=require("ejs-mate");
const flash = require('connect-flash');
const session=require("express-session");
const app=express();
const passport=require("passport");
const LocalStrategy=require("passport-local");
const User=require("./models/user.js");
const UserRouter=require("./routes/user.js");
const userPersonalsRouter=require("./routes/userPersonal.js");
const ExpressError = require("./itils/ExpressError.js");






app.set("view Engine",ejs);
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"/public/css")));
app.use(express.static(path.join(__dirname,"/public/js")));
app.use(express.urlencoded({extended:true})); 
app.use(express.json());
app.use(methodOverride("_method"));
app.engine("ejs",ejsMate);




const sessionOptions={
    secret:"mySuperSecretKey",
    resave:false,
    saveUninitialized:true,
    cookie:{expires:Date.now()+ 7*24*60*60*1000,
        maxAge:7*24*60*60*1000,
        httpOnly:true
    }};
app.use(session(sessionOptions));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());



// use static authenticate method of model in LocalStrategy
passport.use(new LocalStrategy(User.authenticate()));
// use static serialize and deserialize of model for passport session support
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
app.use((req,res,next)=>
{
    res.locals.success=req.flash("success");
    res.locals.error=req.flash("error");
    res.locals.currUser=req.user;
    next();
})



async function main()
{
    await mongoose.connect('mongodb://127.0.0.1:27017/project');
}

main()
.then((res)=>
{
    console.log("connected");
})
.catch((err)=>
{
    console.log(err);
});

app.listen(4000,()=>
{
    console.log("im Started");
});



// ----------------------------------------------------------------------------------------------------
// perosnals routes;



app.use("/",UserRouter);

app.use("/SCSS",userPersonalsRouter);

app.all("*",(req,res,next)=>{
    next(new ExpressError(404,"page not Found"));
})

app.use((err,req,res,next)=>{
    let {statusCode=500,message="Something went Wrong"}=err;
    res.render("main/Error.ejs",{statusCode,message});
});


