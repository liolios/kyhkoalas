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
  console.log('1');
  if(request.method === 'GET'){
      console.log('2');
  }else if(request.method === 'POST'){
      console.log('3');
      console.log(JSON.parse(response).userName);
    //  messages.push(JSON.parse(response));
  }
}
