const trim=function()
{
    const str="   Hello World    "
    console.log("Before Trim:"+str)
    const res=str.trim()
    console.log("After Trim:"+res)
}
const toLowerCase= function(){
    const str="HELLO WORLD"
    console.log("Before Trim:"+str)
    const res=str.toLowerCase()
    console.log("After Trim:"+res)
}
const toUpperCase= function(){
    const str="hello world"
    console.log("Before Trim:"+str)
    const res=str.toUpperCase()
    console.log("After Trim:"+res)
}
module.exports.trim=trim
module.exports.toLowerCase=toLowerCase
module.exports.toUpperCase=toUpperCase