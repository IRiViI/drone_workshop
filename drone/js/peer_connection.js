function PeerConnection(root,connection,ice_servers){

	pc = window.RTCPeerConnection(ice_servers);
	pc.root = root;

	pc.connection_id = connection.connection_id;
	pc.drone_id = connection.drone_id;
	pc.hive_id = connection.hive_id;

	pc.connection = connection;
	pc.media_settings = _getPCSettings(root.id,connection);

	pc.onicecandidate = _onicecandidate;
	pc.onDescription = _onDescription;
	pc.connect = _connect;

	return pc;

}

function _getPCSettings(drone_id,connection){
	var t_drone_settings = connection.media_settings.length;
	for (var i_drone_settings = 0; i_drone_settings < t_drone_settings; i_drone_settings++){
		var drone_settings = connection.media_settings[i_drone_settings];
		if (drone_settings.drone_id == drone_id){
			return drone_settings
		}
	}
	return null;
}


function _onicecandidate(event){
	if (event.candidate != null){
	    if (!event || !event.candidate) {
	      return;
	    }
	    // Send request
	    this.root.websocket_client.sendRequest(
	      	{tag:"candidate",
	      	drone_id:root.id,
	      	hive_id:this.hive_id,
	      	to_drone_id:this.drone_id,
	      	candidate:event.candidate}
	    );
    };
}

function _connect(){
	var pc = this;
	var root = this.root;

	this.createOffer(
		createOfferSucessful,
		createOfferFailure,
		this.media_settings
	);

	function createOfferSucessful(description){
	    root.websocket_client.sendRequest(
	      	{tag:"description",
	      	connection_id:pc.connection_id,
	      	drone_id:root.id,
	      	hive_id:pc.hive_id,
	      	to_drone_id:pc.drone_id,
	      	connection:pc.connection,
	      	description:description}
	    );
	}

	function createOfferFailure(error){
		console.log(error);
	}
}

function _onDescription(description){

	pc.setRemoteDescription(
	    description,
	    onSetRemoteSuccesful,
	    onSetRemoteFailure);


}

function _onAnswerDescription(description){

	pc.setRemoteDescription(
	    description,
	    onSetRemoteSuccesful,
	    onSetRemoteFailure);

}