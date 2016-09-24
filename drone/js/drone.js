function Drone(id,callback){

	this.id = id;
	this.websocket_client = websocketClient(this,callback);

}

Drone.prototype.assign = _assign;

function _assign(key){
	console.log(key);
	this.websocket_client.sendRequest({
		tag:"assign",
		drone_id:this.id,
		key:key
	});
}

