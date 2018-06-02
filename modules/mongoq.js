var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost/';
module.exports.fetchall=function(callback){
	
	MongoClient.connect(url, function(err, db) {
		if(err) console.log(err);
		var dbo=db.db("users");
		dbo.collection("profiles").find({}).toArray(function(err,res){
		db.close();
		return callback(res);
		});

	});
	
}
module.exports.insert=function(data,callback){
	//console.log(data);
	MongoClient.connect(url, function(err, db) {
		if(err) console.log(err);

		var dbo=db.db("users");

		dbo.collection("profiles").insertOne(data,function(err,res){
		db.close();
		return callback(res);
		});

	});
	
}

module.exports.fetchData=function(query,callback){
	
	MongoClient.connect(url, function(err, db) {
		if(err) console.log(err);
		var dbo=db.db("users");
		dbo.collection("profiles").findOne(query,function(err,res){

		db.close();
		return callback(res);
		});

	});
	
}

module.exports.update=function(query,update_data,callback){
	
	MongoClient.connect(url, function(err, db) {
		if(err) console.log(err);
		var dbo=db.db("users");
		console.log(query,update_data);
		dbo.collection("profiles").update(query,update_data,function(err,res){

		db.close();
		return callback(res);
		});

	});
	
}

module.exports.delete=function(data,callback){
	
	MongoClient.connect(url, function(err, db) {
		if(err) console.log(err);
		var dbo=db.db("users");

		dbo.collection("profiles").deleteOne(data,function(err,res){
		db.close();
		return callback(res);
		});

	});
	
}

