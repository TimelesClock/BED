var db = require('./databaseConfig.js')

var categoryDB = {
    getCategory: function (callback){
        var conn = db.getConnection()
        conn.connect(function (err){
            if(err){
                console.log(err)
                return callback(err,null)
            }else{
                var sql = 'SELECT * FROM category'
                conn.query(sql,function(err,result){
                    conn.end()
                    if(err){
                        return callback(err,null)
                    }else{
                        return callback(null,result)
                    }
                    
                })
            }
        })
    }
}

module.exports = categoryDB