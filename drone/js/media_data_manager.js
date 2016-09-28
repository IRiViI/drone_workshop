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

function _createLocalStreamData(video,audio){

}

function _addLocalStreamData(stream_object){

}

function _addRemoteStreamData(stream_object){
	
}

function _addStreamDataToPeerConnection(pc,stream_object){

}