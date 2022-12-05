var express = require('express');
var bodyParser = require('body-parser');
var port = 8082;
var hostname = "localhost";
var app = express();

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

var urlencodedParser = bodyParser.urlencoded({ extended: false });      

app.use(urlencodedParser);//attach body-parser middleware

app.use(bodyParser.json());//parse json data

//VERB+URL

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

app.get('/api/user', function (req, res) {
      res.status(200);
      res.type(".html");
      res.send(userData)
});

app.listen(port, hostname, () => {
      console.log(`Server started and accessible via http://${hostname}:${port}/`);
});