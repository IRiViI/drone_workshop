
var Drone = require('./drone');

function UniverseDroneManager(){
	this.drone_list = [];
}

UniverseDroneManager.prototype.createDrone = _createDrone;
UniverseDroneManager.prototype.getDroneById = _getDroneById;
UniverseDroneManager.prototype.getDroneByWs = _getDroneByWs;
UniverseDroneManager.prototype.checkDrone = _checkDrone;
UniverseDroneManager.prototype.isDrone = _isDrone;
UniverseDroneManager.prototype.addDrone = _addDrone;
UniverseDroneManager.prototype.removeDroneById = _removeDroneById;
UniverseDroneManager.prototype.removeDroneByWs = _removeDroneByWs;


function _createDrone(ws){
	return drone = new Drone(ws);
}

function _addDrone(drone){
	this.drone_list.push(drone);
	return true;
}

function _isDrone(drone_id){
	// Check if drone exists
	var t_drone = this.drone_list.length;
	for (var i_drone = 0; i_drone < t_drone; i_drone++){
		var drone = this.drone_list[i_drone];
		if (drone.id == drone_id){
			return true;
		}
	}
	return false;
}

function _getDroneById(drone_id){
	var t_drone = this.drone_list.length;
	for (var i_drone = 0; i_drone < t_drone; i_drone++){
		var drone = this.drone_list[i_drone];
		if (drone.id == drone_id){
			return drone;
		}
	}
	return null;
}

function _getDroneByWs(ws){
	var t_drone = this.drone_list.length;
	for (var i_drone = 0; i_drone < t_drone; i_drone++){
		var drone = this.drone_list[i_drone];
		if (drone.ws == ws){
			return drone;
		}
	}
	return null;
}

function _checkDrone(){

}

function _removeDroneById(){

}

function _removeDroneByWs(){

}



module.exports = UniverseDroneManager;


