function HiveDroneManager(){
	this.drone_list = [];
}

HiveDroneManager.prototype.getDroneById = _getDroneById;
HiveDroneManager.prototype.checkDrone = _checkDrone;
HiveDroneManager.prototype.addDrone = _addDrone;
HiveDroneManager.prototype.removeDroneById = _removeDroneById;


function _addDrone(drone){
	this.drone_list.push(drone);
	return true;
}

function _getDroneById(id){
	var t_drone = this.drone_list.length;
	for (var i_drone = 0; i_drone < t_drone; i_drone++){
		var drone = this.drone_list[i_drone];
		if (drone.id == id){
			return drone;
		}
	}
	return null;
}

function _checkDrone(){

}

function _removeDroneById(){

}

module.exports = HiveDroneManager;