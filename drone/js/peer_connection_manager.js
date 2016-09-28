function PeerConnectionManager(root){
	// List with peer connections
	this.root = root;
	this.peer_connection_list = [];

}

PeerConnectionManager.prototype.addPeerConnection = _addPeerConnection;
PeerConnectionManager.prototype.createPeerConnection = _createPeerConnection;

function _addPeerConnection(){
	console.log("test wwwuuuuut");
}

function _createPeerConnection(connection){

	// Initiate pc
	var pc;

	// get root of drone
	var root = this.root;

	function iceServerSuccesful(ice_servers){
		pc = PeerConnection(root,connection,ice_servers);
		console.log(pc);
		pc.connect();
	}
	iceServers(iceServerSuccesful)
}


/*

	// Make user media
	function createMediaDataSuccesful(media_data){
		iceServer(function(ice_servers){iceServerSuccesful(ice_servers,media_data)});
	}

	// Create media
	root.media_data_manager.createMediaData(
		{audio:connection.audio, video:connection.video},
		createMediaDataSuccesful
	);
	*/