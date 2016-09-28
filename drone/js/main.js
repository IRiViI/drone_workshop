var drone_id 	= "drone2";
var hive_id 	= "kaas";
var key 		= "$%^7ujhgy";


function callback(){

	drone.assignSuccesful = function(){
		drone.createHive(hive_id);
	}

	drone.createSuccesful = function(){
		drone.joinHive(hive_id);
	}

	drone.createFailure = function(error){
		drone.joinHive(hive_id);
	}

	drone.joinSuccesful = function(){
		drone.getConnectionsByHiveId(hive_id);
	}

	drone.getConnectionsByHiveIdSuccesful = function(data){
		drone.peer_connection_manager.addPeerConnection();
		drone.media_data_manager.createMediaData(true,false,createMediaDataCallback);
	}

	drone.getConnectionsByHiveIdFailure = function(error){
		
	}

	function createMediaDataCallback(media_data){
		drone.media_data_manager.addLocalStreamData(media_data);
		console.log(drone);
	}

	drone.assign(key);
	
}


var universe = location.origin.replace(/^http/, 'ws');
var drone = new Drone(drone_id,universe,callback);
