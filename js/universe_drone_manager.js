
var Drone = require('./drone');

function UniverseDroneManager(){
	this.drone_list = [];
}

UniverseDroneManager.prototype.createDrone = _createDrone;
UniverseDroneManager.prototype.getDroneById = _getDroneById;
UniverseDroneManager.prototype.getDroneByWs = _getDroneByWs;
UniverseDroneManager.prototype.checkDrone = _checkDrone;
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

function _getDroneById(id){
	var t_drone = this.drone_list.length;
	for (var i_drone = 0; i_drone < t_drone; i_drone++){
		var drone = this.drone_list[i_drone];
		if (drone.id = id){
			return drone;
		}
	}
}

function _getDroneByWs(ws){
	var t_drone = this.drone_list.length;
	for (var i_drone = 0; i_drone < t_drone; i_drone++){
		var drone = this.drone_list[i_drone];
		if (drone.ws = ws){
			return drone;
		}
	}
}

function _checkDrone(){

}

function _removeDroneById(){

}

function _removeDroneByWs(){

}



//Universe.prototype.ws = new 

module.exports = UniverseDroneManager;


