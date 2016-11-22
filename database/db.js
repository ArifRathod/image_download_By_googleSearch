var mongo = require('mongodb');
var Server = mongo.Server,
	Db = mongo.Db;
	
function openDB(ip, port, db_name, callback){
	var server = new Server(ip, port, {auto_reconnect: true });
	DB = new Db(db_name, server);
	DB.open(function(err, db) {
		if(!err && db){
			db.authenticate('vivekthumar', 'password_9876', function(err, success) {
        		console.log("Connected", db.databaseName, db.serverConfig.host, db.serverConfig.port);
		 		callback(true);
    		});
		 	
		}else{
			console.log(err, db);
		 	callback(false);
		}
	});
};
// server config
var server_ip = 'ds149207.mlab.com',
	port = 49207,
	db_name = 'googleimages';

openDB(server_ip, port, db_name, function(flag){
	if(flag == false){
		console.log("Can't mongodb connection with DB Farm");
	}
});


