var drone_id 	= "drone2";
var hive_id 	= "kaas";
var key 		= "$%^7ujhgy";

var localVideo = document.getElementById('localVideo');
var remoteVideo = document.getElementById('remoteVideo');

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
		console.log(data);
		drone.peer_connection_manager.addPeerConnection();
		drone.media_data_manager.createMediaData(
			true,
			false,
			createMediaDataSuccesful);
	}

	drone.getConnectionsByHiveIdFailure = function(error){
		
	}

	function createMediaDataSuccesful(media_data){
		localVideo.srcObject = media_data.stream;
	}

	drone.assign(key);
	
}


var universe = location.origin.replace(/^http/, 'ws');
var drone = new Drone(drone_id,universe,callback);
