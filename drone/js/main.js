
function callback(){
	drone.assignCallback = function(){
		console.log(drone);
	}
	drone.assign("$%^7ujhgy");
}

var drone = new Drone("Alice",callback);