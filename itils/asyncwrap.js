//async Error Handler function
const aysncWrap=(fun)=>{ 
    return (req,res,next)=>{
        fun(req,res,next).catch(next)
    }
}

module.exports=aysncWrap;