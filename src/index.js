const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
//const { firstmiddle } = require('./middlewares/bookmiddlewares.js');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://kajolshrivastava:mongo%401999@cluster0.hzs17.mongodb.net/BOOK-db", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )



const firstmiddle=function(req,res,next){
    const ip=req.ip
    const url=req.url
    const date=new Date()
    const year=date.getFullYear()
    const month=date.getMonth()+1
    const day=date.getDate()
    const hour=date.getHours()
    const minute=date.getMinutes()
    const seconds=date.getSeconds()
    console.log(year+"-"+0+month+"-"+day+" "+hour+":"+minute+":"+seconds+" , "+ip+" , "+url)
    next();

}

app.use(firstmiddle)

app.use('/', route);



app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
