function PeerConnectionManager(){
	// List with peer connections
	this.peer_connection_list = [];
	var tmp = new PeerConnection("to_drone_id","hive_id","settings");
}

PeerConnectionManager.prototype.addPeerConnection = _addPeerConnection;
PeerConnectionManager.prototype.createPeerConnection = _createPeerConnection;

function _addPeerConnection(){
	console.log("test wwwuuuuut");
}

function _createPeerConnection(to_drone_id,hive_id,settings){

}

