const http = require(http);
const request = require(request);
const server_port = 3000;

const server = http.createServer(requestHandler);
server.listen(server_port);

function requestHandler(request, response){
  response.setHeader('Access-Control-Allow-Origin', '*');
  if(request.method === 'GET'){
      
  }else if(request.method === 'POST'){

  }
}
