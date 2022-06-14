const jwt = require("jsonwebtoken");

const validToken=function(req,res,next){
    let token=req.headers["x-Auth-Token"]
    if(!token){
      token=req.headers["x-auth-token"]}
    if(!token){
      res.send({status:false,msg:"Token must be present"})
    }
    let decodedToken=jwt.verify(token,"functionup-radon")
    if(!decodedToken){
      res.send({status:false,msg:"Token is invalid"})
    }
    else{
       
        next()
    }
}

module.exports.validToken=validToken