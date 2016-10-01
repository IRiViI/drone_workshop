'use strict';

const express = require('express');
const SocketServer = require('ws').Server;
const path = require('path');

const PORT = process.env.PORT || 3000;
const INDEX = path.join(__dirname, 'index.html');

 const server = express()
	.use(express.static(__dirname + '/js'))
  .use(express.static(__dirname + '/drone/js'))
  .use((req, res) => res.sendFile(INDEX) )
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));

const wss = new SocketServer({ server });

var Universe = require('./js/universe');
var universe = new Universe();

wss.on('connection', (ws) => {

  // ------------- On connection ------------- \\
  console.log('Client connected');
  // create new drone
  var drone = universe.drone_manager.createDrone(ws);
  // add drone to drone list
  universe.drone_manager.addDrone(drone);

  ws.on('close', function(){
    universe.drone_manager.removeDroneByWs(this);
    console.log('Client disconnected');
  });

  ws.on('message',function(message){
    console.log(message);

    // parse messege
    var request = JSON.parse(message);

    // check request
    var response = _checkRequest(request);

    // Execute request
    if (response.error==null){
      response = _executeRequest(response, request, message);
    }

    // Send response
    _sendResponse(response);

  });

  function _checkRequest(request){
        
    // initiate reponse
    var response = {};
    response.original_tag = request.tag;

    // Check assign request
    if (request.tag == "assign"){
      console.log("check assign request");
      var is_drone = universe.drone_manager.isDrone(request.drone_id);
      if (is_drone){
        response.error = "drone already assigned";
      }
    }

    // Check create hive request
    if (request.tag == "create"){
      console.log("check create hive request");
      var is_hive = universe.hive_manager.isHive(request.hive_id);
      if (is_hive){
        response.error = "hive already created";
      }
    }

    // Check create hive request
    if (request.tag == "join"){
      console.log("check join hive request");
    }

    return response;
  }

  function _executeRequest(response,request,message){

    if (request.tag == "description"){
      // Get to drone
      var to_drone = universe.drone_manager.getDroneById(request.to_drone_id);
      // send message
      to_drone.ws.send(message);
    }

    else if (request.tag == "assign"){
      // Add id to drone
      universe.drone_manager.getDroneByWs(ws).id = request.drone_id;
      console.log("Drone assigned");
    }

    else if (request.tag == "create"){
      // Create new hive (NOTE: user 1 is a temperary setting, must be revised in beta)
      var hive = universe.hive_manager.createHive(request.hive_id,"user1");
      // Add hives to universe
      universe.hive_manager.addHive(hive);
      console.log("Hive created");
    }

    else if (request.tag == "join"){
      // Get drone
      var drone = universe.drone_manager.getDroneById(request.drone_id);
      // Get hive
      var hive = universe.hive_manager.getHiveById(request.hive_id);
      // Add hives to universe
      hive.drone_manager.addDrone(drone);
      console.log("Drone joined hive");
    }

    else if (request.tag == "connections"){
      // Get drone
      var drone = universe.drone_manager.getDroneById(request.drone_id);
      // Get hive
      var hive = universe.hive_manager.getHiveById(request.hive_id);
      // get connections of drone
      response.data = hive.connection_manager.getConnectedDroneConnections(request.drone_id);
      console.log("Send connections");
    }

    else if (request.tag == "status"){
      // Total number of hives
      var t_hive = universe.hive_manager.hive_list.length;
      console.log("number of hives: " + t_hive);
      // For every hive
      for (var i_hive = 0; i_hive < t_hive; i_hive++){
        var hive = universe.hive_manager.hive_list[i_hive];
        // Total number of drones
        var t_drone = hive.drone_manager.drone_list.length;
        console.log("number of drones in hive " + hive.id + ": " + t_drone);
        for (var i_drone = 0; i_drone < t_drone; i_drone++){
          var drone = hive.drone_manager.drone_list[i_drone];
          console.log("drone: " + drone.id);
        }
      }
      // Total number of drones
      var t_drone = universe.drone_manager.drone_list.length;
      console.log("number of drones in universe: " + t_drone);
    }

    return response;
  }



  function _sendResponse(response){
    response.tag = "response";
    var message = JSON.stringify(response);
    ws.send(message);
    
  }


});
