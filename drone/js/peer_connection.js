function PeerConnection(root,connection,ice_servers){

	pc = window.RTCPeerConnection(ice_servers);
	pc.root = root;

	pc.connection_id = connection.connection_id;
	pc.drone_id = _getOtherDroneId(root.id,connection.media_settings);
	pc.hive_id = connection.hive_id;

	pc.connection = connection;
	pc.media_settings = _getPCSettings(root.id,connection);

	pc.onicecandidate = _onicecandidate;
	pc.connect = _connect;
	console.log(pc);
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

function _getOtherDroneId(drone_id,media_settings){
	for (var i_drone = 0; i_drone < 1; i_drone++){
		var check_drone_id = media_settings[i_drone].id;
		if (check_drone_id!=drone_id){
			return check_drone_id;
		}
	}
}

function _onicecandidate(event){
	if (event.candidate != null){
	    if (!event || !event.candidate) {
	      return;
	    }
	    console.log("send Candidate");
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
	    root.websocket_client.sendRequest({
	      	tag:"description",
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