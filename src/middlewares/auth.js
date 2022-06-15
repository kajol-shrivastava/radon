const jwt = require("jsonwebtoken");

const authenticate=function(req,res,next){
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



const authorise = function(req, res, next) {
  // comapre the logged in user's id and the id in request
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
    //userId for which the request is made. 
   let userId=req.params.userId
   //userId for the logged-in user
   let decodedid=decodedToken.userId
     //userId comparision to check if the logged-in user is requesting for their own data
  if(userId!=decodedid){
  res.send({status:false,msg:"User logged is not allowed to modify the requested users data"})
  }
  else{
   
      next()
  }
}

module.exports.authenticate=authenticate
module.exports.authorise=authorise