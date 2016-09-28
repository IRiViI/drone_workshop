function Drone(ws){
	this.ws = ws;
	this.id = null;
	this.hive_list = [];
}

Drone.prototype.addHiveByHive = _addHiveByHive;
Drone.prototype.removeHiveByHiveId = _removeHiveByHiveId;

function _addHiveByHive(hive){
	this.hive_list.push(hive);
}

function _removeHiveByHiveId(hive_id){
	var t_hive = this.hive_list.length;
	for (var i_hive = 0; i_hive < t_hive; i_hive++){
		var hive = this.hive_list[i_hive];
		if (hive.id = hive_id){
			this.hive_list.splice(i_hive,1);
		}
	}
}


module.exports = Drone;


