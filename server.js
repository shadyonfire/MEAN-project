var app=require("express")();
var mdb=require("./modules/mongoq.js");
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/",function(req,res){
	res.sendFile(__dirname+"/index.html");
});

app.get("/profile",function(req,res){
	mdb.fetchall(function(result){
		res.send(result);
		res.end();
	});

});

app.get("/images/:image",function(req,res){
	res.sendFile(__dirname+"/"+req.params.image);
});
app.post("/fetchData",function(req,res){
	//console.log(req.body);
	mdb.fetchData(req.body,function(result){
		res.send(result);
		res.end();
	});
});



app.post("/insert",function(req,res){
	//console.log(req.body);
	mdb.insert(req.body,function(result){
		res.send(result);
		res.end();
	});
});

app.post("/update",function(req,res){
	data=req.body;
	query=data.query;
	updateData=data.update;
	mdb.update(query,updateData,function(result){
		//console.log(result);
		res.send(result);
		res.end();
	});
});

app.post("/delete",function(rq,rs){
	mdb.delete(rq.body,function(result){
		if(result.n==1){
			res.send("deleted");
			res.end();
		}
	})
})


app.listen(8080,function(){
	console.log("listening");
	
})