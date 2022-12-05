var db = require('./databaseConfig.js')

var userDB = {
    getUser: function (userid, callback) {
        var conn = db.getConnection()
        conn.connect(function (err) {
            if (err) {
                console.log(err)
                return callback(err, null)
            }else{
                console.log("POSTMAN retrieving data of user "+userid)
                var sql = 'SELECT * FROM user WHERE userid = ?'
                conn.query(sql,[userid],function(err,result){
                    conn.end()
                    if (err){
                        console.log(err)
                        return callback(err,null)
                    }else{
                        return callback(null,result)
                    }
                })
            }
        })

    },

    getUsers:function(callback){
        var conn = db.getConnection()

        conn.connect((err)=>{
            if(err){
                console.log(err)
                return callback(err,null)
            }else{
                console.log("POSTMAN Retrieve all users data")
                var sql = 'SELECT * FROM user'
                conn.query(sql,function(err,result){
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
    },

    addUser: function(username,email,role,password,callback){
        var conn = db.getConnection()
        conn.connect(function(err){
            if(err){
                console.log(err)
                return callback(err,null)
            }else{
                console.log("POSTMAN addUser")
                var sql = 'INSERT INTO user(username,email,role,password) VALUES(?,?,?,?)'
                conn.query(sql,[username,email,role,password],function(err,result){
                    conn.end()
                    if(err){
                        console.log(err)
                        return callback(err,null)
                    }else{
                        return callback(null,result.affectedRows)
                    }
                })
            }
        })
    },

    updateUser:function(email,password,userid,callback){
        var conn = db.getConnection()

        

        conn.connect(function(err){
            if(err){
                console.log(err)
                return callback(err,null)
            }else{
                console.log("POSTMAN Put")
                var sql = 'UPDATE user SET email = ?,password = ? WHERE (userid = ?)'
                conn.query(sql,[email,password,userid],function(err,result){
                    conn.end()
                    if(err){
                        console.log(err)
                        return callback(err,null)
                    }else{
                        return callback(null,result.affectedRows)
                    }
                })
            }
        })
    },

    deleteUser: function(userid,callback){
        var conn = db.getConnection()

        conn.connect(function(err){
            if(err){
                console.log(err)
                return callback(err,null)
            }else{
                console.log("POSTMAN DELETE request for user "+userid)
                var sql = 'DELETE FROM user WHERE userid = ?'

                conn.query(sql,[userid],function(err,result){
                    conn.end()
                    if(err){
                        console.log(err)
                        return callback(err,null)
                    }else{
                        return callback(null,result.affectedRows)
                    }
                })
            }
        })
    }
}

module.exports = userDB

