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
HiveConnectionManager.prototype.getAllDroneConnectionsStructure = _getAllDroneConnectionsStructure;
HiveConnectionManager.prototype.getConnectedDroneConnections = _getConnectedDroneConnections;
HiveConnectionManager.prototype.connectedDroneConnections = _connectedDroneConnections;
HiveConnectionManager.prototype.checkDroneConnection = _checkDroneConnection;
HiveConnectionManager.prototype.addRawConnectionList = _addRawConnectionList;
HiveConnectionManager.prototype.addConnectionToConnectionStructure = _addConnectionToConnectionStructure;

function _setConnectionList(){
	try{
		// Load connections from memmory
		var raw_connection_list = require("." + this.settings_file);
		// add raw connectionlist from dense to loose format
		this.addRawConnectionList(raw_connection_list);
	} catch(error){
		console.log(error);
	}
	
}

function _addRawConnectionList(data){
	// Total number of connections
	var t_connection = data.connection_list.length;
	// For every connection
	for (var i_connection = 0; i_connection < t_connection; i_connection++){
		// Get connection
		var connection = data.connection_list[i_connection];
		var id_1 = connection.drone[0].drone_id;
		var id_2 = connection.drone[1].drone_id;
		console.log(connection);
		this.addConnectionToConnectionStructure(id_1,id_2,connection);
		this.addConnectionToConnectionStructure(id_2,id_1,connection);
		console.log(this.connection_list);
	}

	return connections_list
}

function _addConnectionToConnectionStructure(id_1,id_2,connection){
	// Set the target drone id 
	connection.id = id_2;
	// Find connection structure of drone 1
	var connection_structure = this.getAllDroneConnectionsStructure(id_1);
	if (connection_structure != null){
		// Add connection if connection structure exists
		connection_structure.connection_list.push(connection);
	} else {
		// Create new connection structure
		connection_structure = _createDroneConnectionStructure(id_1);
		// Add connection to connection structure
		connection_structure.connection_list.push(connection);
		// Add connections strucuture to connection structure list
		this.connections_list.push(connection_structure);
	}
}

function _createDroneConnectionStructure(drone_id){
	var connection_structure = {};
	connection_structure.drone_id = drone_id;
	connection_structure.connection_list = {};
	return connection_structure;
}

function _getAllDroneConnectionsStructure(drone_id){
	// total number of defined drone connections
	var t_drone_connections = this.connection_list.length;
	// For every drone connections object
	for (var i_drone_connections = 0; i_drone_connections < t_drone_connections; i_drone_connections++){
		// Get drone connections object
		var drone_connections = this.connection_list[i_drone_connections];
		// If it is the desired drone connections object
		if (drone_connections.drone_id == drone_id){
			// Return drone connections object
			return drone_connections;
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
			if (connection.drone_id == drone.id){
				connection_list.push(connection);
			}
		}
	}
	return connection_list;
}

function _getConnectedDroneConnections(drone_id){
	console.log(this.connections_list);
	var all_drone_connections_list = this.getAllDroneConnectionsStructure(drone_id).connection_list;
	return this.connectedDroneConnections(all_drone_connections_list);
}

function _checkDroneConnection(drone_id_1,drone_id_2){

}

module.exports = HiveConnectionManager;