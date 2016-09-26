function Drone(id,callback){

	this.id = id;
	this.websocket_client = websocketClient(this,callback);

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

Drone.prototype.getConnectionsByHiveIdSuccesful = function(){
	console.log("Warning: getConnectionsByHiveIdSuccesful undefined");
}	

// Default Failure callbacks
		
Drone.prototype.assignFailure = function(){
	console.log("Warning: assignFailure undefined");
}

Drone.prototype.createFailure = function(){
	console.log("Warning: createFailure undefined");
}

Drone.prototype.joinFailure = function(){
	console.log("Warning: joinFailure undefined");
}

Drone.prototype.getConnectionsByHiveIdFailure = function(){
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
