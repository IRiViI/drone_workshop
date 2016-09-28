function MediaDataManager(){

	this.local_media_data_list = [];
	this.remote_media_data_list = [];
}

MediaDataManager.prototype.getLocalStreamDataByType 		= _getLocalStreamDataByType;
MediaDataManager.prototype.getRemoteStreamDataByDroneId 	= _getRemoteStreamDataByDroneId;
MediaDataManager.prototype.createLocalStreamData 			= _createLocalStreamData;
MediaDataManager.prototype.addLocalStreamData 				= _addLocalStreamData;
MediaDataManager.prototype.addRemoteStreamData 				= _addRemoteStreamData;
MediaDataManager.prototype.addStreamDataToPeerConnection	= _addStreamDataToPeerConnection;


function _getLocalStreamDataByType(video,audio){

}

function _getRemoteStreamDataByDroneId(to_drone_id){

}

function _createLocalStreamData(video,audio,getUserMediaSuccess){

	// user media settings
	var settings = {
	    audio: audio,
	    video: video
	};

	MediaData(settings,getUserMediaSuccess);

}

function _addLocalStreamData(media_data){
	this.local_media_data_list.push(media_data);
}

function _addRemoteStreamData(media_data){
	this.remote_media_data_list.push(media_data);
}

function _addStreamDataToPeerConnection(pc,media_data){

}