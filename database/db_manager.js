
var db = require("./db");

exports.isDBConnected = function(){
	if(DB && DB._state == 'connected'){
		return true;
	}
	return false;
};

exports.FindIntoDB = function(collectionName, option, callback){
    DB.collection(collectionName, function(err, collection) {
    	if(err){
    		console.log("DB Find Error:", err);
    		callback([]);
    	}else{
    		collection.find(option).sort({_id:-1}).toArray(function(err, results){
				if(!err){
					callback(results);
				}else{
					console.log("Query Find Error:", err);
					callback([]);
				}
			});
    	}
	});
};

exports.insertIntoDB = function(collection,dataObj,callback){
	DB.collection(collection, {safe:true}, function(err, collection) {
		if(err){
			console.log("Insert DB Collection Error:", err);
			callback([]);
		}else{
			collection.insert(dataObj, {safe:true}, function(err, result){
				if(err || !result){
					console.log("Insert Query Error:", err);
					callback([]);
				}else{
					callback(result);
				}
			});
		}
	});
};

exports.UpdateIntoDB = function (collectionName,query,setQuery,callback){
	var boolOpt = {safe:true, upsert:true};

	DB.collection(collectionName, {safe: true}, function(err, collection){
		if(err){
			console.log(err);
			callback(0);
		}else{
			collection.update(query, setQuery, boolOpt, function(err, res){
				if(err){
					callback(0);
				}else{
					callback(res);
				}
			});
		}
	});
};