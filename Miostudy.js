var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url,function(err,db){
    if(err) throw err;
    var dbo = db.db('mydb');
    var obj = {name:"Adwaith T N",Adress:"G"};
    dbo.collection("me").insertOne(obj,function(err,res){
        if(err) throw err;
        console.log("database created successfully");
        db.close();
    })

});