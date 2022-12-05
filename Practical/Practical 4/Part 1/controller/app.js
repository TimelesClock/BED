var express = require('express');
var app = express();
var user = require('../model/databaseAccess.js');
var bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({extended:false})

app.use(bodyParser.json())
app.use(urlencodedParser)

app.get('/api/user/:userid', function (req, res) {
    var id = req.params.userid;
    user.getUser(id, function (err, result) {
        if (!err) {
            res.send(result);
        } else {
            res.status(500).send("Some error");
        }
    });
});

app.get('/api/user',(req,res)=>{
    user.getUsers((err,result)=>{
        if (!err){
            res.send(result)
        }else{
            console.log(result)
            res.status(500).send("Some error")
        }
    })
})

app.post('/api/user',function(req,res){
    var username = req.body.username
    var email = req.body.email
    var role = req.body.role
    var password = req.body.password

    user.addUser (username,email,role,password,function(err,result){
        if(!err){
            console.log(result)
            res.send(result + ' record inserted')
        }else{
            res.send(err.statusCode)
        }
    })
})

app.put('/api/user/:userid',function(req,res){
    var email = req.body.email
    var password = req.body.password
    var userid = req.params.userid
    
    user.updateUser(email,password,userid,(err,result)=>{
        if(!err){
            res.send(result + " record updated")
        }else{
            res.send(err.statusCode)
        }
    })
})

app.delete('/api/user/:userid',function(req,res){
    var userid = req.params.userid

    user.deleteUser(userid,function(err,result){
        if(!err){
            res.send(result + ' record deleted')
        }else{
            console.log(err)

            res.status(500).send("An error has occurred")
        }
    })
})

var category = require('../model/category.js')

app.get('/api/category',function(req,res){
    category.getCategory(function(err,result){
        if(!err){
            res.send(result)
        }else{
            console.log(err)
            res.status(500).send("Some error")
        }
    })
})

var furniture = require('../model/furniture.js')

app.get('/api/category/:catid/furniture',function(req,res){
    var catid = req.params.catid
    furniture.getFurnitureByCat(catid,function(err,result){
        if(!err){
            let toReturn = {
                Furniture: result
            }
            res.send(toReturn)
        }else{
            console.log(err)
            res.status(500).send("Another error has occurred")
        }
    })
})

module.exports = app