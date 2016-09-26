var drone_id 	= "drone1";
var hive_id 	= "kaas";
var key 		= "$%^7ujhgy";


function callback(){

	drone.assignSuccesful = function(){
		drone.createHive(hive_id);
	}

	drone.createSuccesful = function(){
		drone.joinHive(hive_id);
	}

	drone.createFailure = function(){
		drone.joinHive(hive_id);
	}

	drone.joinSuccesful = function(){
		console.log(drone);
		drone.getConnectionsByHiveId(hive_id);
	}

	drone.getConnectionsByHiveIdSuccesful = function(){

	}

	drone.getConnectionsByHiveIdFailure = function(){
		
	}

	drone.assign(key);
	
}

var drone = new Drone(drone_id,callback);