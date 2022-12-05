const fs = require('fs')
const path = require('path')
const http = require('http')

const hostname = 'localhost'
const port = 3000

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


const server = http.createServer(async (req, res) => {
    if (req.method == "POST") {
        if (req.url == "/login") {
            let body = ''
            await req.on('data', chunk => {
                body += chunk.toString()
                //Convert buffer to string
            })
            // console.log(body)
            var user = JSON.parse(body)
            let val = userData.find(o => o.email == user.user && o.password == user.password)
            // console.log(val)

            if (val != undefined) {
                res.statusCode = 200
                res.setHeader('Content-Type', 'application/json')
                let response = JSON.stringify({ message: "Welcome admin!" })
                res.end(response)
                return res

            } else {
                var fileUrl = "/index.html"
                var filePath = path.resolve('./public' + fileUrl)
                
                return fs.exists(filePath, (exists) => {
                    if (!exists) {
                        fileUrl = '/error.html'
                        filePath = path.resolve('./public' + fileUrl)
                    } else {
                        res.statusCode = 200
                        res.setHeader('Content-Type', 'text/html')
                    }
                    fs.createReadStream(filePath).pipe(res)
                })
            }
        }
    }
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.end('<html><body>Welcome to Node JS!</body></html>')
})

server.listen(port, hostname, () => {
    console.log(`Server started and accessible via http://${hostname}:${port}/`);
});