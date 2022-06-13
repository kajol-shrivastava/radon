const checkfreeAppUser=function(req,res,next){
  
    const isFreeAppUser=req.headers.isfreeappuser
    if(isFreeAppUser===undefined)
    res.send({msg:"missing a mandatory header please send isFreeappuser header"})
   
    else{
        req.body.isFreeAppUser=req.headers.isfreeappuser
    next()
}}

module.exports.checkfreeAppUser=checkfreeAppUser