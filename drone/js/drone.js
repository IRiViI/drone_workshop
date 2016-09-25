function Drone(id,callback){

	this.id = id;
	this.websocket_client = websocketClient(this,callback);

}

Drone.prototype.assign = _assign;
Drone.prototype.createHive = _createHive;
Drone.prototype.joinHive = _joinHive;

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

// Debugging code

Drone.prototype.serverStatus = _serverStatus;

function _serverStatus(hive_id){
	// Send request to create hive
	this.websocket_client.sendRequest({
		tag:"status",
		drone_id:this.id
	});
}
