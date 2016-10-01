function PeerConnection(root,connection,ice_servers){

	pc = window.RTCPeerConnection(ice_servers);

	var pc_settings = _getPCSettings(root.id,connection);
	console.log(pc_settings);

	//var pc = RTCPeerConnection(ice_servers);
	pc.root = root;
	pc.drone_id = pc_settings.drone_id;
	pc.hive_id = connection.hive_id;
	pc.settings = {
		offerToReceiveAudio:connection.offerToReceiveAudio, 
		offerToReceiveVideo:connection.offerToReceiveVideo, 
		audio:pc_settingss.audio, 
		video:pc_settings.video};
	pc.onicecandidate = _onicecandidate;
	pc.connect = _connect;
	return pc;

}

function _getPCSettings(drone_id,connection){
	var t_drone_settings = connection.drone.length;
	for (var i_drone_settings = 0; i_drone_settings < t_drone_settings; i_drone_settings++){
		var drone_settings = connection.drone[i_drone_settings];
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
		this.settings
	);

	function createOfferSucessful(description){
	    root.websocket_client.sendRequest(
	      	{tag:"description",
	      	drone_id:root.id,
	      	hive_id:pc.hive_id,
	      	to_drone_id:pc.drone_id,
	      	description:description}
	    );
	}

	function createOfferFailure(error){
		console.log(error);
	}
}