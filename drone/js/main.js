var hive_id 	= "kaas";
var key 		= "$%^7ujhgy";
var drone;

var localVideo = document.getElementById('localVideo');
var remoteVideo = document.getElementById('remoteVideo');

var start_button = document.getElementById('startButton');

start_button.onclick = start;

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

	drone.getConnectionsByHiveIdSuccesful = function(connection_list){
		console.log(connection_list);
		var t_connection = connection_list.length;
		for (var i_connection = 0; i_connection < t_connection; i_connection++){
			var connection = connection_list[i_connection]
			connection.hive_id = hive_id;
			drone.peer_connection_manager.createPeerConnection(connection);
			drone.peer_connection_manager.addPeerConnection();
		}
	}

	drone.getConnectionsByHiveIdFailure = function(error){
		
	}

	drone.assign(key);
	
}

function start(){
	drone_id = document.getElementById('drone_id').value;
	console.log(drone_id);
	var universe = location.origin.replace(/^http/, 'ws');
	drone = new Drone(drone_id,universe,callback);
}
