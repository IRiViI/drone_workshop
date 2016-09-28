function PeerConnection(root,connection,ice_servers){

	RTCPeerConnection.apply(this,ice_servers)

	//var pc = RTCPeerConnection(ice_servers);
	this.root = root;
	this.drone_id = connection.drone_id;
	this.hive_id = connection.hive_id;

}

PeerConnection.prototype.onicecandidate = _onicecandidate;

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