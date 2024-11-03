const express=require("express");
const router=express.Router();
const { isAuthenticated } = require("../itils/middlewares.js");
const {listingSchema}=require("../Schema.js");
const userpersonals=require("../models/personals.js");
const User=require("../models/user.js");
const ExpressError= require("../itils/ExpressError.js");
const aysncWrap=require("../itils/asyncwrap");
const multer  = require('multer')
const {storage}=require("../CloudConfig.js");
const upload = multer({ storage })

//valdition of listings
function validatelisting(req,res,next)
{
    const {error}=listingSchema.validate(req.body);
    console.log(error);
    if(error)
    {
        next(new ExpressError(400,error));
        return;
    }
    else
    {
        next();
    }

}











//show route
router.get("/",(req,res,next)=>
{
    res.render("main/Home.ejs");
});



//personal details 
router.get("/documents/new",isAuthenticated,(req,res,next)=>
{
    if(!req.user.personalsId)
    {
        res.render("personals/new.ejs");
        return;
    }
    
    req.flash("error","Documents are already inserted!");
    res.redirect("/SCSS/viewDocuments");
     
});

const cpUpload = upload.fields([{ name: 'aadharImage', maxCount: 1 }, { name: 'tenthImage', maxCount: 1 },
                                { name: 'twelthImage', maxCount: 1 }, { name: 'casteImage', maxCount: 1 },{ name: 'incomeImage', maxCount: 1 },
                                { name: 'physicallyHandicaped', maxCount: 1 },{name:'passphoto',maxCount:1}])
router.post("/documents/new",isAuthenticated,cpUpload,async(req,res,next)=>
{
    console.log(res.files)
    let jsonString=JSON.stringify(req.files, null, 2)
    const jsonObject = JSON.parse(jsonString);
    
   

    if(!req.user.personalsId)
    {
        const userlogindata=req.user;
        const userpersonaldatasaving=new userpersonals(req.body);

        let url=jsonObject.passphoto[0].path;
        let filename=jsonObject.passphoto[0].filename;
        userpersonaldatasaving.passphoto={url,filename};
       
        url=jsonObject.aadharImage[0].path;
        filename=jsonObject.aadharImage[0].filename;
        userpersonaldatasaving.aadharImage={url,filename};

        url=jsonObject.tenthImage[0].path;
        filename=jsonObject.tenthImage[0].filename;
        userpersonaldatasaving.tenthImage={url,filename};

        url=jsonObject.twelthImage[0].path;
        filename=jsonObject.twelthImage[0].filename;
        userpersonaldatasaving.twelthImage={url,filename};

        url=jsonObject.casteImage[0].path;
        filename=jsonObject.casteImage[0].filename;
        userpersonaldatasaving.casteImage={url,filename};

        url=jsonObject.physicallyHandicaped[0].path;
        filename=jsonObject.physicallyHandicaped[0].filename;
        userpersonaldatasaving.physicallyHandicaped={url,filename};

        console.log(userpersonaldatasaving)

        userlogindata.personalsId= userpersonaldatasaving._id;

        await userpersonaldatasaving.save();
        await userlogindata.save();
        req.flash("success","Documents inserted Successfully")
        res.redirect("/SCSS");
        return;
    }
    else
    {
       req.flash("error","Documents are already inserted!");
       res.redirect("/SCSS/viewDocuments");
       return;
    }

});

//view data
router.get("/viewDocuments",isAuthenticated,aysncWrap(async(req,res,next)=>
{
    console.log("user"+req.user);
    if(req.user.personalsId)
    {

        const userPersonalData=await userpersonals.findById(req.user.personalsId);
        console.log(userPersonalData);
        res.render("main/show.ejs",{userPersonalData});
        return;
    }
    else
    {
        req.flash("error","please submit documents to view them");
        res.redirect("/SCSS/documents/new");
    }

}));


router.get("/documents/update",isAuthenticated,aysncWrap(async (req,res,next)=>{
    if(req.user.personalsId){
        const userPersonalData=await userpersonals.findById(req.user.personalsId);
        console.log(userPersonalData)
        res.render("personals/Update.ejs",{userPersonalData});
        return;
    }
    req.flash("error","please submit documents to Update");
    res.redirect("/SCSS/documents/new");

}));



router.put("/documents/update",isAuthenticated,cpUpload,aysncWrap(async(req,res,next)=>{

    let jsonString=JSON.stringify(req.files, null, 2)
    const jsonObject = JSON.parse(jsonString);
    if(req.user.personalsId){

        

        
        let data=req.body;
        let userpersonaldatasaving=await userpersonals.updateOne({_id:req.user.personalsId},{...data});


        let url=jsonObject.passphoto[0].path;
        console.log(url);
        let filename=jsonObject.passphoto[0].filename;
        if(typeof jsonObject.passphoto[0].path != "undefined" && typeof jsonObject.passphoto[0].filename != "undefined"){
            userpersonaldatasaving.passphoto={url,filename};
        }
        
       
        url=jsonObject.aadharImage[0].path;
        filename=jsonObject.aadharImage[0].filename;
        if(typeof jsonObject.aadharImage[0].path != "undefined" && typeof jsonObject.aadharImage[0].filename != "undefined"){
            userpersonaldatasaving.aadharImage={url,filename};
        }

        url=jsonObject.tenthImage[0].path;
        filename=jsonObject.tenthImage[0].filename;
        if(typeof jsonObject.tenthImage[0].path != "undefined" && typeof jsonObject.tenthImage[0].filename != "undefined"){
            userpersonaldatasaving.tenthImage={url,filename};
        }

        url=jsonObject.twelthImage[0].path;
        filename=jsonObject.twelthImage[0].filename;
        if(typeof jsonObject.twelthImage[0].path != "undefined" && typeof jsonObject.twelthImage[0].filename != "undefined"){
            userpersonaldatasaving.twelthImage={url,filename};
        }
        url=jsonObject.casteImage[0].path;
        filename=jsonObject.casteImage[0].filename;
        if(typeof jsonObject.casteImage[0].path != "undefined" && typeof jsonObject.casteImage[0].filename != "undefined" ){
            userpersonaldatasaving.casteImage={url,filename};
        }

        url=jsonObject.physicallyHandicaped[0].path;
        filename=jsonObject.physicallyHandicaped[0].filename;
        if(typeof jsonObject.physicallyHandicaped[0].path != "undefined" && typeof jsonObject.physicallyHandicaped[0].filename != "undefined"){
            userpersonaldatasaving.physicallyHandicaped={url,filename};
        }

        console.log(userpersonaldatasaving);

        await userpersonaldatasaving.save();
        req.flash("success","douments updated successfully is Updated!");
        res.redirect("/SCSS");
        return;
    }
    req.flash("error","please submit documents to Update");
    res.redirect("/SCSS/documents/new");
}));


router.get("/Apply",isAuthenticated,aysncWrap(async (req,res)=>{
    let choice;
    if(req.user.personalsId){
        choice=await userpersonals.findById({_id:req.user.personalsId});
    }
    

    if(req.user.personalsId && choice && !choice.applied){
        res.render("personals/Apply.ejs",{applyfor:choice.applyfor});
        return;
    }
    if(choice  && choice.applied){
        req.flash("error","You Already applied for college");
        res.render("main/Home.ejs");
        return;
    }
    req.flash("error","please Upload your Documents");
    res.redirect("/SCSS/documents/new");
}));

router.post("/applied",aysncWrap(async(req,res)=>{
    let userPersonalData=await userpersonals.findById({_id:req.user.personalsId});
    console.log(userPersonalData.applied)
    if(req.user.personalsId && !userPersonalData.applied){
        await userpersonals.findByIdAndUpdate({_id:req.user.personalsId},{$set:{applied:true}});
        userPersonalData=await userpersonals.findById({_id:req.user.personalsId});
        console.log(userPersonalData);
        req.flash("success","You Have applied for colleges ,please wait for notifications");
        res.render('main/Home.ejs')
        return;
    }
    req.flash("error","please Upload your Documents");
    res.redirect("/SCSS/documents/new");
}));




module.exports=router;
