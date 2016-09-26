function websocketClient(parent,callback){

  var HOST = "ws://localhost:3000";
  var ws = new WebSocket(HOST);
  var parent = parent;

  ws.onopen = function(){
    console.log("Websocket opened");
    callback();
  };

  ws.onerror = function(error) {
    console.log('WebSocket Error: ' + error);
  };

  ws.onmessage = function(message){
    console.log(message);
    var request = JSON.parse(message.data);
    if (request.tag=="response"){

      // Response to assign response
      if (request.original_tag=="assign"){
        if (request.error==null){
          parent.assignSuccesful();
        } else{
          parent.assignFailure();
        }
      }

      // Response to create response
      if (request.original_tag=="create"){
        if (request.error==null){
          parent.createSuccesful();
        } else{
          parent.createFailure();
        }
      }

      // Response to create response
      if (request.original_tag=="join"){
        if (request.error==null){
          parent.joinSuccesful();
        } else{
          parent.joinFailure();
        }
      }

      // Response to get connections response
      if (request.original_tag=="connections"){
        if (request.error==null){
          parent.getConnectionsByHiveIdSuccesful();
        } else{
          parent.getConnectionsByHiveIdFailure();
        }
      }
    }
  }

  ws.sendRequest = function(request){
    var message = JSON.stringify(request);
    ws.send(message);
  }

  

  return ws;

}