function Drone(id,universe,callback){

	this.id = id;
	this.websocket_client = websocketClient(this,universe,callback);
	this.peer_connection_manager = new PeerConnectionManager(this);
	this.media_data_manager = new MediaDataManager();
}

// Drone main functionality

Drone.prototype.assign = _assign;
Drone.prototype.createHive = _createHive;
Drone.prototype.joinHive = _joinHive;
Drone.prototype.getConnectionsByHiveId = _getConnectionsByHiveId;

function _assign(key){
	// Send request to assign drone
	this.websocket_client.sendRequest({
		tag:"assign",
		drone_id:this.id,
		key:key
	});
}

function _createHive(hive_id){
	// Send request to create hive
	this.websocket_client.sendRequest({
		tag:"create",
		drone_id:this.id,
		hive_id:hive_id
	});
}

function _joinHive(hive_id){
	// Send request to join hive
	this.websocket_client.sendRequest({
		tag:"join",
		drone_id:this.id,
		hive_id:hive_id
	});
}

function _getConnectionsByHiveId(hive_id){
	// Send request to join hive
	this.websocket_client.sendRequest({
		tag:"connections",
		drone_id:this.id,
		hive_id:hive_id
	});
}

// Default Succesful callbacks

Drone.prototype.assignSuccesful = function(){
	console.log("Warning: assignSuccesful undefined");
}

Drone.prototype.createSuccesful = function(){
	console.log("Warning: createSuccesful undefined");
}

Drone.prototype.joinSuccesful = function(){
	console.log("Warning: joinSuccesful undefined");
}

Drone.prototype.getConnectionsByHiveIdSuccesful = function(connection_list){
	console.log(connection_list);
	// Total number of peer connections of connected drones in this hive
	var t_connection = connection_list.length;
	for (var i_connection = 0; i_connection < t_connection; i_connection++){
		// Get connection
		var connection = connection_list[i_connection];
		// Create peer connection
		var pc = this.peer_connection_manager.createPeerConnection(connection,onCreateSuccesful);
		
		function onCreateSuccesful(pc){
			// Start connection with other drone
			pc.connect();
		}
	}
}

// Default Failure callbacks
		
Drone.prototype.assignFailure = function(error){
	console.log("Warning: assignFailure undefined");
}

Drone.prototype.createFailure = function(error){
	console.log("Warning: createFailure undefined");
}

Drone.prototype.joinFailure = function(error){
	console.log("Warning: joinFailure undefined");
}

Drone.prototype.getConnectionsByHiveIdFailure = function(error){
	console.log("Warning: getConnectionsByHiveIdFailure undefined");
}

// Debugging code

Drone.prototype.serverStatus = _serverStatus;

function _serverStatus(hive_id){
	// Send request to create hive
	this.websocket_client.sendRequest({
		tag:"status",
		drone_id:this.id
	});
}
