// var WebsocketManager = require('./websocket_manager');
var UniverseDroneManager = require('./universe_drone_manager');
var UniverseHiveManager = require('./universe_hive_manager');
var UniversePermissionManager = require('./universe_permission_manager');

function Universe(){
	
}

Universe.prototype.drone_manager = new UniverseDroneManager();
Universe.prototype.hive_manager = new UniverseHiveManager();
Universe.prototype.permission_manager = new UniversePermissionManager();


module.exports = Universe;