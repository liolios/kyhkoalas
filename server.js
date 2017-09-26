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
    response.setHeader('Content-Type', 'Application/JSON;');
    response.end(JSON.stringify(messages));
  }else if(request.method === 'POST'){
      request.on('data', (data) => {
        messages.push(JSON.parse(data));
      });
      response.end();

  }
}
