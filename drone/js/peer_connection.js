function PeerConnection(to_drone_id,hive_id,ice_servers,settings){

	RTCPeerConnection.apply(this,ice_servers)

	//var pc = RTCPeerConnection(ice_servers);

	this.to_drone_id = to_drone_id;
	this.hive_id = hive_id;

}

PeerConnection.prototype.onicecandidate = _onicecandidate;

function _onicecandidate(event){
	if (event.candidate != null){
      if (!event || !event.candidate) {
        return;
      }
      ws.sendMessage({candidate:event.candidate},to_client_id_text.value);
    };
}