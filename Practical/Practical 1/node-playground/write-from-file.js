const fs = require('fs')

fs.writeFile('test2.txt','test\n123',(err)=>{
    if (err){
        console.log(err)
        return
    }else{
        fs.readFile('test2.txt',(err,data) =>{
            if (err){
                console.log(err)
                return
            }else{
                console.log(data.toString())
            }
        })
    }
})
