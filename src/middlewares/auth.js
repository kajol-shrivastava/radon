const jwt = require("jsonwebtoken");

const authenticate=function(req,res,next){
   try{ let token=req.headers["x-Auth-Token"]
    if(!token){
      token=req.headers["x-auth-token"]}
    if(!token){
      res.status(401).send({status:false,msg:"Token must be present"})
    }
    let decodedToken=jwt.verify(token,"functionup-radon")
    console.log(decodedToken)
    if(!decodedToken){
      res.status(401).send({status:false,msg:"Token is invalid"})
    }
    else{
      
        next()
    }}
    catch(err){
      console.log(err.message)
      res.status(500).send({error:"server error",msg:err.message})
    }
}



const authorise = function(req, res, next) {
  // comapre the logged in user's id and the id in request
  try{let token=req.headers["x-Auth-Token"]
    if(!token){
      token=req.headers["x-auth-token"]}
    if(!token){
      res.status(401).send({status:false,msg:"Token must be present"})
    }
let decodedToken=jwt.verify(token,"functionup-radon")
  if(!decodedToken){
    res.status(401).send({status:false,msg:"Token is invalid"})
  }
    //userId for which the request is made. 
   let userId=req.params.userId
   //userId for the logged-in user
   let decodedid=decodedToken.userId
     //userId comparision to check if the logged-in user is requesting for their own data
  if(userId!=decodedid){
  res.status(403).send({status:false,msg:"User logged is not allowed to modify the requested users data"})
  }
  else{
   
      next()
  }}
  catch(err){
    res.status(500).send({error:"server error",msg:err.message})
  }}

module.exports.authenticate=authenticate
module.exports.authorise=authorise