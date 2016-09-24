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
  console.log(universe.drone_manager);
  ws.send(universe.hive_manager.test);
  ws.on('close', function(){
    console.log('Client connected');
  });

  ws.on('message',function(message){
    console.log('Client connected');
  });
});
