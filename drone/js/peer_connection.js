function PeerConnection(root,connection,ice_servers){

	pc = window.RTCPeerConnection(ice_servers)

	//var pc = RTCPeerConnection(ice_servers);
	pc.root = root;
	pc.drone_id = connection.drone_id;
	pc.hive_id = connection.hive_id;
	pc.settings = {connection:this.audio, video:connection.video};
	pc.onicecandidate = _onicecandidate;
	pc.connect = _connect;
	return pc;

}

function _onicecandidate(event){
	if (event.candidate != null){
	    if (!event || !event.candidate) {
	      return;
	    }
	    root.websocket_client.sendRequest(
	      	{tag:"candidate",
	      	drone_id:root.id,
	      	hive_id:this.hive_id,
	      	to_drone_id:this.drone_id,
	      	candidate:event.candidate}
	    );
    };
}

function _createOffer(offerOptions){
	this.createOffer(
    offerSuccesful,
    offerFailure,
    offerOptions);
}

function _connect(){
	this.createOffer(
		_createOfferSucessful,
		_createOfferFailure,
		this.settings
	);
}

function _createOfferSucessful(description){
	
    root.websocket_client.sendRequest(
      	{tag:"description",
      	drone_id:root.id,
      	hive_id:this.hive_id,
      	to_drone_id:this.drone_id,
      	description:description}
    );
}

function _createOfferFailure(error){
	console.log(error);
}