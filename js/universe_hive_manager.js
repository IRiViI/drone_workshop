var Hive = require('./hive');

function UniverseHiveManager(){
	this.hive_list = [];
}

UniverseHiveManager.prototype.createHive = _createHive;
UniverseHiveManager.prototype.addHive = _addHive;
UniverseHiveManager.prototype.isHive = _isHive;
UniverseHiveManager.prototype.getHiveById = _getHiveById;


function _createHive(hive_id,world_id){
	return hive = new Hive(hive_id,world_id);
}

function _addHive(hive){
	this.hive_list.push(hive);
	return true;
}

function _isHive(hive_id){
	// Check if drone exists
	var t_hive = this.hive_list.length;
	for (var i_hive = 0; i_hive < t_hive; i_hive++){
		var hive = this.hive_list[i_hive];
		if (hive.id == hive_id){
			return true;
		}
	}
	return false;
}

function _getHiveById(id){
	var t_hive = this.hive_list.length;
	for (var i_hive = 0; i_hive < t_hive; i_hive++){
		var hive = this.hive_list[i_hive];
		if (hive.id == id){
			return hive;
		}
	}
	return null;
}

//Universe.prototype.ws = new 

module.exports = UniverseHiveManager;


