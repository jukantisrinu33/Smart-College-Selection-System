module.exports.isAuthenticated=function (req,res,next)
{
    if(!req.isAuthenticated())
    {
        req.flash("error","Please Login");
        return res.redirect("/login"); 
    }
    next();
}