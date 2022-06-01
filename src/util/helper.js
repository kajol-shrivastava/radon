const date=new Date();
const printDate=function(){
    const today=date.toDateString()
    console.log(today)
}

const printMonth =function(){
    const month=['jan','feb','mar','apr','may','june','july','aug','sept','oct','nov','dec']
    const res=date.getMonth()
    const curmonth=month[res]
console.log(curmonth)
}
const getBatchInfo=function(){
    console.log("Radon W3D3, the topic for today is Nodejs Module system")

}

module.exports.printDate=printDate
module.exports.printMonth=printMonth
module.exports.getBatchInfo=getBatchInfo