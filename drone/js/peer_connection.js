function PeerConnection(to_drone_id,hive_id,ice_servers,settings){

	var pc = RTCPeerConnection(ice_servers);

	pc.to_drone_id = to_drone_id;
	pc.hive_id = hive_id;
	pc.onicecandidate = _onicecandidate;

	_onicecandidate = function(event){
		
	}


	return pc;

}