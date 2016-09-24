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
      if (request.error==null){
        if (request.original_tag=="assign"){
          parent.assignCallback();
        }
      } else{
        console.log(request.error);
      }
    }
  }

  ws.sendRequest = function(request){
    var message = JSON.stringify(request);
    ws.send(message);
  }

  

  return ws;

}