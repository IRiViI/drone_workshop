function MediaData(settings,getUserMediaSuccess){

  this.getUserMediaSuccess = getUserMediaSuccess;

	window.navigator.getUserMedia(
    settings,
    function(stream){
      var media_data = {
        share: [],
        video: settings.video,
        audio: settings.audio,
        stream:stream
      }
      _getUserMediaSuccess(media_data);
    },
    this.getUserMediaFailure
  );
}

//MediaData.prototype.getUserMediaSuccess = _getUserMediaSuccess;
MediaData.prototype.getUserMediaFailure = _getUserMediaFailure;

function _getUserMediaSuccess(media_data){
  console.log(media_data);
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