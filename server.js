const http = require('http');
const request = require('request');
const server_port = 3000;
let messages = [];

const server = http.createServer(requestHandler);
server.listen(server_port, function(){
  console.log('Now listening on port 3000');
});

function requestHandler(request, response){
  response.setHeader('Access-Control-Allow-Origin', '*');
  if(request.method === 'GET'){

  }else if(request.method === 'POST'){
      messages.push(JSON.parse(response));
  }
}
