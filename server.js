'use strict';

const express = require('express');
const SocketServer = require('ws').Server;
const path = require('path');

const PORT = process.env.PORT || 3000;
const INDEX = path.join(__dirname, 'index.html');

 const server = express()
	.use(express.static(__dirname + '/js'))
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
    console.log('Client disconnected');
  });

  ws.on('message',function(message){
    console.log(message);

    // parse messege
    var request = JSON.parse(message);

    // check request
    var response = _checkRequest(request);

    // Execute request
    response = _executeRequest(response, request);

    // Send response
    _sendResponse(response);

  });

  function _checkRequest(request){
        
    // initiate reponse
    var response = {};
    response.original_tag = request.tag;

    if (request.tag == "assign"){
      console.log("hello");
    }

    return response;
  }

  function _executeRequest(response,request){

    if (request.tag == "assign"){
      universe.drone_manager.getDroneByWs(ws).id = request.id;
    }

    return response;
  }

  function _sendResponse(response){
    response.tag = "response"
    var message = JSON.stringify(response);
    ws.send(message)
    
  }


});
