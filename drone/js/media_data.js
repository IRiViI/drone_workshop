function MediaData(video,audio){

	// user media settings
	var settings = {
	    audio: audio,
	    video: video
	};

	window.navigator.getUserMedia.apply(this,settings,this.getUserMediaSuccess,this.getUserMediaFailure);
}

MediaData.prototype.getUserMediaSuccess = _getUserMediaSuccess;
MediaData.prototype.getUserMediaFailure = _getUserMediaFailure;

function _getUserMediaSuccess(stream){
	console.log("Warning: getUserMediaSuccess is undefined");
}

function _getUserMediaFailure(event){
	console.log("Warning: get user media failed");
}

/*
function getUserMediaSuccess(stream){
    localVideo.srcObject = stream;
    window.localStream = localStream = stream;
    pc.addStream(localStream);
    function gotRemoteStream(event){
      window.remoteStream = remoteVideo.srcObject = event.stream;
      //console.log("gotRemoteStream");
    }
    pc.onaddstream = gotRemoteStream;
  }
  function getUserMediaFailure(error){
    //console.log("getUserMediaFail:");
    //console.log(error);
  }
  window.navigator.getUserMedia(
    configuration,
    getUserMediaSuccess,
    getUserMediaFailure);
*/
//StreamDataManager.prototype.getLocalStreamDataByType 		= _getLocalStreamDataByType;