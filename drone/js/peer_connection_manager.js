function PeerConnectionManager(){
	// List with peer connections
	this.peer_connection_list = [];

}

PeerConnectionManager.prototype.addPeerConnection = _addPeerConnection;
PeerConnectionManager.prototype.createPeerConnection = _createPeerConnection;

function _addPeerConnection(){
	console.log("test wwwuuuuut");
}

function _createPeerConnection(to_drone_id,hive_id,settings){

	function callback(ice_servers){
		var pc = new PeerConnection(to_drone_id,hive_id,ice_servers,settings);
	}
	iceServer(callback);
}

