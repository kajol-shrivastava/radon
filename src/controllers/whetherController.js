const axios=require("axios")

let getWhether=async function(req,res){
  try {let citytemp=[]
    let appid=req.query.appid
    let cities= ["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
    for (let i in cities){console.log(cities[i])}
    for(let x in cities){
    let q=cities[x]
     let options={
        method:'get',
        url:`http://api.openweathermap.org/data/2.5/weather?q=${q}&appid=${appid}`
    }  
    let results=await axios(options)
    console.log(results.data)
    let obj={city:q}
    obj.temp=results.data.main.temp
    citytemp.push(obj)
    }
for(let i in citytemp){console.log(citytemp[i])}
let sortedcities=citytemp.sort(function(a,b){return a.temp-b.temp})

    let data=sortedcities
    res.status(200).send({status:true,msg:data})
}
catch (err) {
    console.log(err)
    res.status(500).send({ msg: err.message })
}

}

module.exports.getWhether=getWhether