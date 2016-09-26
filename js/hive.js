var HiveDroneManager = require('./hive_drone_manager');
var HivePermissionManager = require('./hive_permission_manager');
var HiveConnectionManager = require('./hive_connection_manager');


function Hive(hive_id,world_id){
	// The world of the hive (this should be reorganized in beta)
	this.world_id = world_id;
	// Hive id
	this.id = hive_id;
	// Dir of hive
	this.dir = "./user_data/" + this.world_id + "/hive/" + this.id + "/"; // in the future, use a structure similar to the universe object
	// Drone manager
	this.drone_manager = new HiveDroneManager();
	// Permission manager
	this.permission_manager = new HivePermissionManager();
	// Connection manager
	this.connection_manager = new HiveConnectionManager(this);
	this.connection_manager.setConnectionList();
}

module.exports = Hive;


