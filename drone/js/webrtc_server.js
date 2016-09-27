function webrtcServer(callback){

  $(document).ready(function() {
    $.get("https://service.xirsys.com/ice",
      {
          ident: "something",
          secret: "61986108-7b2f-11e6-b4ee-28ee1984c12b",
          domain: "quiet-woodland-83140.herokuapp.com",
          application: "tadtest",
          room: "default",
          secure: 1
      },
      function(xirsys_data, status) {

        var servers = { 
        "iceServers": [
          {url:"stun:turn01.uswest.xirsys.com"},
          {
            username:xirsys_data.d.iceServers[1].username,
            url:xirsys_data.d.iceServers[1].url,
            credential:xirsys_data.d.iceServers[1].credential
          },
          {
            username:xirsys_data.d.iceServers[2].username,
            url:xirsys_data.d.iceServers[2].url,
            credential:xirsys_data.d.iceServers[2].credential
          },
          {
            username:xirsys_data.d.iceServers[3].username,
            url:xirsys_data.d.iceServers[3].url,
            credential:xirsys_data.d.iceServers[3].credential
          },
          {
            username:xirsys_data.d.iceServers[3].username,
            url:xirsys_data.d.iceServers[3].url,
            credential:xirsys_data.d.iceServers[3].credential
          },
          {url:'stun:stun.l.google.com:19302'},
          {
            url:'turn:numb.viagenie.ca', 
            username:"rckvink@gmail.com", 
            credential:"[80S37b98^+7N<e"
          }

        ] 
      };

      callback(servers);

      }
    );
  });

  

}

module.exports = webrtcServer;