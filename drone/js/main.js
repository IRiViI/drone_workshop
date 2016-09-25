var drone_id 	= "sdesdf";
var hive_id 	= "kaas";
var key 		= "$%^7ujhgy";


function callback(){

	drone.assignCallback = function(){
		drone.createHive(hive_id);
	}

	drone.createCallback = function(){
		drone.joinHive(hive_id);
	}

	drone.joinCallback = function(){
		console.log(drone);
	}

	drone.assign(key);
	
}

var drone = new Drone(drone_id,callback);