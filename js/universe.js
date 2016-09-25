// var WebsocketManager = require('./websocket_manager');
var UniverseDroneManager = require('./universe_drone_manager');
var UniverseHiveManager = require('./universe_hive_manager');
var UniversePermissionManager = require('./universe_permission_manager');

function Universe(){

	this.drone_manager = new UniverseDroneManager();
	this.hive_manager = new UniverseHiveManager();
	this.permission_manager = new UniversePermissionManager();
	
}

// NOTE: The managers can only be defined this way as long as there is only one universe
//Universe.prototype.drone_manager = new UniverseDroneManager();
//Universe.prototype.hive_manager = new UniverseHiveManager();
//Universe.prototype.permission_manager = new UniversePermissionManager();

module.exports = Universe;