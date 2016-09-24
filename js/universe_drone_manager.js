
var Drone = require('./drone');

function UniverseDroneManager(){
	this.drone_list = [];
}

UniverseDroneManager.prototype.createDrone = _createDrone;
UniverseDroneManager.prototype.getDroneById = _getDroneById;
UniverseDroneManager.prototype.getDroneByWse = _getDroneByWs;
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

function _getDroneById(){

}

function _getDroneByWs(){

}

function _checkDrone(){

}

function _removeDroneById(){

}

function _removeDroneByWs(){

}



//Universe.prototype.ws = new 

module.exports = UniverseDroneManager;


