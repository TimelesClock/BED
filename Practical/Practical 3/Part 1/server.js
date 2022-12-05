var express = require('express')
var serveStatic = require('serve-static')
var app = express()
var port = 3000
var hostname = 'localhost'

app.use(function (req, res, next) {//create our custom middleware
    console.log(req.url);
    console.log(req.method)
    console.log(req.path);
    console.log(req.query.email); //email can be changed to anything. It will pull data from the url. 
    //for example /?email = test.com or /?id = 1, multiple queries are separated by &


    res.type(".html");
    res.end("<html><body>Using response object!!</body></html>");
    //res.redirect("https://www.sp.edu.sg");//comment out if we just want to redirect
    //next();//since we are setting the whole response data, do not pass to the next middleware
});

app.use(serveStatic(__dirname + "/public"))
app.listen(port, hostname, () => {
    console.log(`Server has started and accessible via http://${hostname}:${port}`)
})

