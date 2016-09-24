var HiveDroneManager = require('./hive_drone_manager');
var HivePermissionManager = require('./hive_permission_manager');


function Hive(){

}

Hive.prototype.hive_permission_manager = new HivePermissionManager();
Hive.prototype.hive_drone_manager = new HiveDroneManager();

module.exports = Hive;


