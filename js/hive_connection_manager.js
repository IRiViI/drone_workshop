function HiveConnectionManager(parent){
	// List with all the connections of the hive
	this.connection_list = [];
	// The parent object
	this.parent = parent;
	// Corresponding directory 
	this.dir = parent.dir;
	// Save file 
	this.settings_file = this.dir + "connections";
}

HiveConnectionManager.prototype.setConnectionList = _setConnectionList;
HiveConnectionManager.prototype.getAllDroneConnections = _getAllDroneConnections;
HiveConnectionManager.prototype.getConnectedDroneConnections = _getConnectedDroneConnections;
HiveConnectionManager.prototype.connectedDroneConnections = _connectedDroneConnections;
HiveConnectionManager.prototype.checkDroneConnection = _checkDroneConnection;



function _setConnectionList(){
	try{
		this.connection_list = require("." + this.settings_file);
	} catch(error){
		console.log(error);
	}
	
}

function _getAllDroneConnections(drone_id){
	// total number of defined drone connections
	var t_drone_connections = this.connection_list.length;
	// For every drone connections object
	for (var i_drone_connections = 0; i_drone_connections < t_drone_connections; i_drone_connections++){
		// Get drone connections object
		var drone_connections = this.connection_list[i_drone_connections];
		// If it is the desired drone connections object
		if (drone_connections.id == drone_id){
			// Return drone connections object
			return drone_connections.connections;
		}
	}
	return null;
}

/**
* Format: 
* all_drone_connections: [{id,offerToReceiveAudio,offerToReceiveVideo,audio,viedo},..]
*/
function _connectedDroneConnections(all_drone_connections){
	var connection_list = []
	// Total number of connections
	var t_drone_connection = all_drone_connections.length;
	// Get drone list of the hive
	var drone_manager = this.parent.drone_manager;
	var t_drone = drone_manager.drone_list.length;
	// For every drone connection
	for (var i_drone_connection = 0; i_drone_connection < t_drone_connection; i_drone_connection++){
		// Get connection
		var connection = all_drone_connections[i_drone_connection];
		// For every drone in the hive
		for (var i_drone = 0; i_drone < t_drone; i_drone++){
			var drone = drone_manager.drone_list[i_drone];
			// Check if the id of the connection is the same as the id of the drone in the drone hive
			if (connection.id == drone.id){
				connection_list.push(connection);
			}
		}
	}
	return connection_list;
}

function _getConnectedDroneConnections(drone_id){
	var all_drone_connections = this.getAllDroneConnections(drone_id);
	return this.connectedDroneConnections(all_drone_connections);
}

function _checkDroneConnection(drone_id_1,drone_id_2){

}

module.exports = HiveConnectionManager;