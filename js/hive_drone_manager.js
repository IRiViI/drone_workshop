function HiveDroneManager(parent){
	this.drone_list = [];
	this.parent = parent;
}

HiveDroneManager.prototype.getDroneById = _getDroneById;
HiveDroneManager.prototype.checkDrone = _checkDrone;
HiveDroneManager.prototype.addDrone = _addDrone;
HiveDroneManager.prototype.removeDroneById = _removeDroneById;


function _addDrone(drone){
	this.drone_list.push(drone);
	drone.addHiveByHive(this.parent);
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

function _checkDrone(id){
	return null
}

function _removeDroneById(id){
	var t_drone = this.drone_list.length;
	for (var i_drone = 0; i_drone < t_drone; i_drone++){
		var drone = this.drone_list[i_drone];
		if (drone.id == id){
			// Remove hive from drone
			drone.removeHiveByHiveId(this.parent.id);
			// Remove drone from hive
			this.drone_list.splice(i_drone,1);
			return true;
		}
	}
	return false;
}

module.exports = HiveDroneManager;