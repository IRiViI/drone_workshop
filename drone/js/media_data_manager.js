function MediaDataManager(){

	this.local_media_data_list = [];
	this.remote_media_data_list = [];
}

MediaDataManager.prototype.getLocalMediaDataByType 		= _getLocalMediaDataByType;
MediaDataManager.prototype.getRemoteMediaDataByDroneId 	= _getRemoteMediaDataByDroneId;
MediaDataManager.prototype.createMediaData 				= _createMediaData;
//MediaDataManager.prototype.addLocalMediaData 			= _addLocalMediaData;
MediaDataManager.prototype.addRemoteMediaData 			= _addRemoteMediaData;
MediaDataManager.prototype.addMediaDataToPeerConnection	= _addMediaDataToPeerConnection;


function _getLocalMediaDataByType(video,audio){

}

function _getRemoteMediaDataByDroneId(to_drone_id){

}

function _createMediaData(settings,createMediaSuccesful){

	// call back after creading media
	function getUserMediaSuccesful(media_data){
		// Add media to list
		_addLocalMediaData(media_data);
		// call back
		createMediaSuccesful();
	}

	// Create media
	MediaData(settings,getUserMediaSuccesful);

}

function _addLocalMediaData(media_data){
	this.local_media_data_list.push(media_data);
}

function _addRemoteMediaData(media_data){
	this.remote_media_data_list.push(media_data);
}

function _addMediaDataToPeerConnection(pc,media_data){

}