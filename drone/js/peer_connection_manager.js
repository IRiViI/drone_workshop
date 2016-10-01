function PeerConnectionManager(root){
	// List with peer connections
	this.root = root;
	this.peer_connection_list = [];

}

PeerConnectionManager.prototype.addPeerConnection = _addPeerConnection;
PeerConnectionManager.prototype.createPeerConnection = _createPeerConnection;
PeerConnectionManager.prototype.onDescription = _onDescription;
PeerConnectionManager.prototype.getPeerConnectionById = _getPeerConnectionById;

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

// pc connection messages
function _onDescription(request){
	var pc = this.getPeerConnectionById(request.connection_id);
	console.log(pc);
}


function _getPeerConnectionById(id){
	var t_connection = this.peer_connection_list.length;
	for (var i_connection = 0; i_connection < t_connection; i_connection++){
		var connection = this.peer_connection_list[i_connection];
		if (connection.connection._id = id){
			return connection;
		}
	}
	return null;
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