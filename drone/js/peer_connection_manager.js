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
	this.peer_connection_list.push(pc);
}

function _createPeerConnection(connection,callback){

	// Initiate pc
	var pc;

	// get root of drone
	var root = this.root;

	function iceServerSuccesful(ice_servers){
		var pc = PeerConnection(root,connection,ice_servers);
		root.peer_connection_manager.addPeerConnection(pc);
		callback(pc);
	}
	iceServers(iceServerSuccesful);
}

// pc connection messages
function _onDescription(request){
	// Get peer connection with same id
	var pc = this.getPeerConnectionById(request.connection_id);
	if (pc == null){
		// Create peer connetion when absence of peer connection is observed
		pc = this.createPeerConnection(request.connection,onCreateSuccesful);
	} else {
		// Continue if pc exists
		onAnswerDescription(pc);
	}
	// Process a request
	function onCreateSuccesful(pc){
		pc.setRemoteDescription(
		    request.description,
		    onSetRemoteSuccesful,
		    onSetRemoteFailure
		);
	    function onSetRemoteSuccesful(){
    		pc.createAnswer(anwerSuccesful,answerFailure);	
	    }
		function anwerSuccesful(answerDescription){
		    this.root.websocket_client.sendRequest({
		      	tag:"answer",
		      	connection_id:pc.connection_id,
		      	drone_id:root.id,
		      	hive_id:pc.hive_id,
		      	to_drone_id:pc.drone_id,
		      	description:answerDescription}
		    );

	      	pc.setLocalDescription(
		        answerDescription,
		        setLocalSuccesful,
		        setLocalFailure);
	    }
		function setLocalSuccesful(event){
		  	//console.log("setLocalSuccesful:");
		  	//console.log(event);
		}
	    function onSetRemoteFailure(error){
	      	console.log(error);
	    }
		function setLocalFailure(error){
		  	console.log(error);
		}
	    function answerFailure(error){
	      	console.log(error);
	    }
	}
	// Process an answer
	function onAnswerDescription(pc){
		pc.setRemoteDescription(
		    request.description,
		    onSetRemoteSuccesful,
		    onSetRemoteFailure
		);
	    function onSetRemoteSuccesful(){
    		//	
	    }
	    function onSetRemoteFailure(error){
	      	console.log(error);
	    }
	}
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