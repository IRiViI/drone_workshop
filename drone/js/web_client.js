function webClient(){

  var HOST = "ws://localhost:3000";
  var ws = new WebSocket(HOST);
  ws.onopen = function(){
    console.log("open");
  };

  ws.onerror = function(error) {
    console.log('WebSocket Error: ' + error);
  };

  ws.onmessage = function(message){
    console.log(message);
  }

  return ws;

}