const express = require('express');
const lg =require('lodash')
const myHelper = require('../util/helper')
const underscore = require('underscore');
const { json } = require('express/lib/response');
const { chunk } = require('lodash');

const router = express.Router();

router.get('/test-me', function (req, res) {
    myHelper.printDate()
    myHelper.getCurrentMonth()
    myHelper.getCohortData()
    let firstElement = underscore.first(['Sabiha','Akash','Pritesh'])
    console.log('The first element received from underscope function is '+firstElement)
    res.send('My first ever api!')
});

router.get('/hello1', function (req, res) {
   
    res.send('Hello there!')
});

router.get('/candidates', function(req, res){
    console.log('Query paramters for this request are '+JSON.stringify(req.query))
    let gender = req.query.gender
    let state = req.query.state
    let district = req.query.district
    console.log('State is '+state)
    console.log('Gender is '+gender)
    console.log('District is '+district)
    let candidates = ['Akash','Suman']
    res.send(candidates)
})

router.get('/candidates/:canidatesName', function(req, res){
    console.log('The request objects is '+ JSON.stringify(req.params))
    console.log('Candidates name is '+req.params.canidatesName)
    res.send('Done')
})
//assignment of the api making and sending response
router.get('/movies',function(req,res){
    const movies=['Rang De Basanti','The Shining','Lord of the Rings','Batman begins']
    res.send(movies)
})

router.get('/movies/:moviesNumber',function(req,res){
    const movie=['Rang De Basanti','The Shining','Lord of the Rings','Batman begins']
    let k=req.params.moviesNumber
    let flag=0
    for(let i=0;i<4;i++){
        if(k==i){
            flag=1
            break
        }
    }
        if(flag==1){
             return res.send(movie[k])
        }
        else{
            return res.send("please enter a valid index b/w 0-3")
        }
    })

router.get('/films',function(req,res){
    const film=[{'id':1,'name':'Rang De Basanti'},{'id':2,'name':'Incendies'},{'id':3,'name':'The Shining'},{'id':4,'name':'Finding Nemo'}]
    res.send(film)
})

router.get('/films/:filmid',function(req,res){
    const film=[{'id':1,'name':'Rang De Basanti'},{'id':2,'name':'Incendies'},{'id':3,'name':'The Shining'},{'id':4,'name':'Finding Nemo'}]
    let x=req.params.filmid
    x=x-1
    let flag=0
    for(let i=0;i<4;i++){
        if(i==x){
            flag=1
            break
        }}
        if(flag==1){
            return res.send(film[x])
        }
        else{
            return res.send("no movie exists with this id")
        }
    
})

//assignment of the use of lodash function
router.get('/hello',function(req,res){
    let i=['jan','feb','march','apr','may','june','july','aug','sept','oct','nov','dec']
    console.log("before chunk function:"+i)
    let k=lg.chunk(i,3)
    console.log(k)
    let j=[3,7,41,23,63,77,51,9,27,11]
    console.log("before tail function:"+j)
    let n=lg.tail(j)
    console.log(n)
    let x1=[1,4,3,2]
    let x2=[0,6,3,1]
    let x3=[4,7,5,0]
    let x4=[9,7,4,1]
    let x5=[7,3,1,0]
    let m=lg.union(x1,x2,x3,x4,x5)
    console.log(m)
    let x=[['horror','The Shining'],['drama','Titanic'],['thriler','Shutter Island'],['fantasy','Pans Labyrinth']]
    let pair=lg.fromPairs(x)
    console.log(pair)
    res.send('using the lodash package')

})
//assignment of finding the missing no
router.get('/sol1',function(req,res){
    let i=[1,2,3,4,5,7]
    let total1=0
    for(let x=0;x<6;x++){
      total1=total1+i[x]  
    }
    let last=i.pop()
    let sum=last*(last+1)/2;
    let missingno=sum-total1
    res.send("data: "+missingno)
})

router.get('/sol2',function(req,res){
    let i=[33,34,35,37,38]
    let total1=0
    let len=i.length
    for(let x=0;x<5;x++){
      total1=total1+i[x] 
    }
    let last=i.pop()
    let first=i[0]
    let sum=(len+1)*(last+first)/2;
    let missingno=sum-total1
    res.send("data: "+missingno)
})
module.exports = router;
// adding this comment for no reason