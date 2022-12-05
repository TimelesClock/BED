const fs = require('fs');

var data = fs.readFile('test.txt', (err,data1)=>{
    if (err){
        console.log(err)
        return
    }else{
        console.log(data1.toString())
    }
});
