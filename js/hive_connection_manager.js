function HiveConnectionManager(parent){
	this.connection_list = [];
	this.parent = parent;
	this.dir = parent.dir;
	this.settings_file = this.dir + "connections";
}

HiveConnectionManager.prototype.setConnectionList = _setConnectionList;
HiveConnectionManager.prototype.getAllDroneConnections = _getAllDroneConnections;
HiveConnectionManager.prototype.getConnectedDroneConnections = _getConnectedDroneConnections;
HiveConnectionManager.prototype.checkDroneConnection = _checkDroneConnection;



function _setConnectionList(){
	this.connection_list = require("." + this.settings_file);
}

function _getAllDroneConnections(drone_id){

}

function _connectedDroneConnections(all_drone_connections){

}

function _getConnectedDroneConnections(drone_id){
	var all_drone_connections = _getAllDroneConnections(drone_id);
	return _connectedDroneConnections(all_drone_connections);
}

function _checkDroneConnection(drone_id_1,drone_id_2){

}

module.exports = HiveConnectionManager;