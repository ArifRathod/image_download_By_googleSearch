

var DBManager = require('../database/db_manager'),
	collectionName = 'images',
	http = require('http'),                                                
    Stream = require('stream').Transform,                                  
    fs = require('fs'),
    q = require('q'),
    Jimp = require("jimp"),
    config = require('../config/config.js');

if (!fs.existsSync(approot+'/public/images')){
    fs.mkdirSync(approot+'/public/images');
}

var ImagesClient = require('google-images');
var client = new ImagesClient(config.CSE_ID, config.API_KEY);

exports.searchFromGoogle = function(req,res){
	var imageName = (req.body.imageName).trim(),
		updateFlag = req.body.updateFlag,
		imageArr = [];

	var opt = {image : imageName}
	DBManager.FindIntoDB(collectionName, opt, function(results){
		if(results.length && results.length > 0 && !updateFlag){
			var obj = {
                status : false
            }
            res.send(JSON.stringify(obj,null,4));

		}else{
			
			var page = 1;
			if(results && results.length > 0 && results[0] && results[0].data.length > 0){
				page =  Math.ceil((results[0].data.length / 10) + results[0].data.length)	
				imageArr = imageArr.concat(results[0].data)
			}
			client.search(imageName,{ page: page }).then(function (images) {
     			
     			function sync(){
     				if(i < images.length){ 
     					download(images[i]).then(function(imageObj){
     						imageArr.push(imageObj.path)
     						compress(imageObj.path).then(function(){
     							i++;
     							sync();
     						},function(err){
     							i++;
     							sync();
     						});
     					},function(err){
     						i++;
     						sync();
     					});
     				}else{
 						var data = {image : imageName,data : imageArr}
 						DBManager.UpdateIntoDB(collectionName, {image : imageName}, data, function(insertResult){
 							var obj = {
			                	status : true
				            }
				            res.send(JSON.stringify(obj,null,4));
 						});
     				}
     			};
        		var i = 0;
        		sync();
    		});

			
		}	
	});
	
};

function download(obj){
	var deffered = q.defer();
	var url = obj.url.replace('https','http');
	var imageType = (obj.type.split('/'))[1]
	if(imageType != ''){
		var storeImage = Date.now()+'.'+imageType;
		var req = http.request(url, function(response) {                                        
			var data = new Stream();
			response.on('data', function(chunk) {                                       
				data.push(chunk);                                                         
			});                                                                         

			response.on('end', function() {                                             
				fs.writeFileSync(approot+'/public/images/'+storeImage, data.read()); 
				deffered.resolve({status : true, path : storeImage})                              
			});                                                                         
		});
		req.on('error', function(e) {
			deffered.reject({status : false});
		});
		req.setTimeout(20000,function(){
			req.abort();
		})
		req.end();
	}else{
		deffered.reject({status : false});
	}
	return deffered.promise;
};

function compress(file){
	var deffered = q.defer();
	Jimp.read(approot+'/public/images/'+file, function (err, image) {
	    if(err){
	    	deffered.reject({status : false});
	    }else{
	    	image.quality(50).greyscale().write(approot+'/public/images/'+file); 
	    	deffered.resolve({status : true})
	    }     
	}).catch(function (err) {
		console.log('T-1')
    	console.error(err);
	});
	return deffered.promise;
};

exports.getList = function(req,res){
	var type = req.body.typeOfData
	var opt = {};
	if(type == 'speData'){
		var imageName = req.body.imageName 
		opt = {image : imageName}
	}
	DBManager.FindIntoDB(collectionName, opt, function(results){
		if(type == 'label'){
			var arr = [];
			results.forEach(function(item,idx){
				arr.push(item.image)
				if(idx == results.length -1){
					res.send(arr)		
				}
			})
		}else if(type == 'speData'){
			var arr = [];
			results.forEach(function(item,idx){
				arr = arr.concat(item.data)
				if(idx == results.length -1){
					res.send(arr)		
				}
			});
		}else{
			var arr = [];
			results.forEach(function(item,idx){
				arr = arr.concat(item.data)
				if(idx == results.length -1){
					res.send(arr)		
				}
			});
			//res.send(results)
		}
		
		
	})
}
