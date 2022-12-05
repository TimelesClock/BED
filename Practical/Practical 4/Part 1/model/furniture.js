var db = require('./databaseConfig.js')

var furnitureDB = {
    getFurnitureByCat: function(catid,callback){
        var conn = db.getConnection()
        conn.connect(function(err){
            if(err){
                console.log(err)
                return callback(err,null)
            }else{
                var sql = 'SELECT f.*,c.cat_name FROM furniture f,category c WHERE f.cat_id = ? AND c.cat_id = f.cat_id'
                conn.query(sql,[catid],function(err,result){
                    conn.end()
                    if(err){
                        console.log(err)
                        return callback(err,null)
                    }else{
                        return callback(null,result)
                    }
                })
            }
        })
    }
}

module.exports = furnitureDB