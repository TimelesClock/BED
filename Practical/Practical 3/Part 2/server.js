var express = require('express');
var bodyParser = require('body-parser');
var port = 8081;//use another port 8081 for this exercise
var hostname = "localhost";
var app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(urlencodedParser);//attach body-parser middleware
app.use(bodyParser.json());//parse json data
//VERB+URL


//Fake DB
var userData = [
    {
        "userid": 1,
        "username": "John",
        "email": "john@gmail.com",
        "role": "user",
        "password": "abc123"
    },
    {
        "userid": 2,
        "username": "mary",
        "email": "mary@gmail.com",
        "role": "user",
        "password": "abc123"
    }
]



app.get('/api/user', function (req, res) {//GET all data
    res.status(200);
    res.type(".JSON");
    res.end(JSON.stringify(userData));
});

app.get('/user/:id',function(req,res){//Get specific user data
    let id = req.params.id
    let index = userData.findIndex(obj => obj.userid == id) //Finds index in the array of objects using userid
    if (index == -1) {
        res.status(404)
        res.type('.json')
        res.end(`{"message":"There are no existing user with id ${id}!"}`)
    }else{
        res.status(200)
        res.type('.JSON')
        res.end(JSON.stringify(userData[index]))
    }
})


app.post('/api/user', function (req, res) {
    let final = ""
    res.status(200)
    res.type(".html")
    final += ("Received new user data:")

    final += ("\n<br/>UserName" + req.body.username)
    final += ("\n<br/>Email" + req.body.email)
    final += ("\n<br/>Role" + req.body.role)
    final += ("\n<br/>Password" + req.body.password)

    let lastID = userData.at(-1).userid
    userData.push({
        "userid":lastID + 1,
        "username":req.body.username,
        "email":req.body.email,
        "role":req.body.role,
        "password":req.body.password
    })
    res.end(final)
});

app.delete('/user/:id', function (req, res) {
    let id = req.params.id
    let index = userData.findIndex(obj => obj.userid == id) //Finds index in the array of objects using userid
    if (index == -1) {
        res.status(404)
        res.type('.json')
        res.end(`{"message":"There are no existing user with id ${id}!"}`)
    } else {
        res.status(200)
        userData.splice(index, 1) //Deletes the user from the "database"
        for (var i = 1;i<=userData.length;i++){
            userData[i-1].userid = i
        }

        res.type('.json')
        res.end((`{"message":"User with ${id} has been successfully deleted!"}`))
    }

})

app.put('/user/:id', function (req, res) {

    let id = req.params.id
    let index = userData.findIndex(obj => obj.userid == id) //Finds index in the array of objects using userid
    if (index == -1){
        res.status(404)
        res.type('.json')
        res.end(`{"message":"There are no existing user with id ${id}!"`)
    }else{
        res.status(200)
        let email = req.body.email
        userData[index].email = email
        res.type('.json')
        res.end(`{"message":"User with ${id} has been successfully updated with new email ${email}"}`)
    }
})

app.listen(port, hostname, () => {
    console.log(`Server started and accessible via http://${hostname}:${port}/`);
});