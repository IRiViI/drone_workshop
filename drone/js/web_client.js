function websocketClient(parent,universe,callback){

  //var HOST = "ws://localhost:3000";
  var ws = new WebSocket(universe);
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

    if (request.tag=="description"){
        if (request.description!=null){
          parent.onDescription(request);
        }
    }

    else if (request.tag=="response"){

      // Response to assign response
      if (request.original_tag=="assign"){
        if (request.error==null){
          parent.assignSuccesful();
        } else{
          parent.assignFailure(request.error);
        }
      }

      // Response to create response
      else if (request.original_tag=="create"){
        if (request.error==null){
          parent.createSuccesful();
        } else{
          parent.createFailure(request.error);
        }
      }

      // Response to create response
      else if (request.original_tag=="join"){
        if (request.error==null){
          parent.joinSuccesful();
        } else{
          parent.joinFailure(request.error);
        }
      }

      // Response to get connections response
      else if (request.original_tag=="connections"){
        if (request.error==null){
          parent.getConnectionsByHiveIdSuccesful(request.data);
        } else{
          parent.getConnectionsByHiveIdFailure(request.error);
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