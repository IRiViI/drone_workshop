function StreamDataManager(){
	
	this.local_stream_data_list = [];
	this.remote_stream_data_list = [];
}

StreamDataManager.prototype.getLocalStreamDataByType 		= _getLocalStreamDataByType;
StreamDataManager.prototype.getRemoteStreamDataByDroneId 	= _getRemoteStreamDataByDroneId;
StreamDataManager.prototype.createLocalStreamData 			= _createLocalStreamData;
StreamDataManager.prototype.addLocalStreamData 				= _addLocalStreamData;
StreamDataManager.prototype.addRemoteStreamData 			= _addRemoteStreamData;
StreamDataManager.prototype.addStreamDataToPeerConnection	= _addStreamDataToPeerConnection;


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