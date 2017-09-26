const http = require('http');
const request = require('request');
const server_port = 3000;
let messages = [];
let usersOnline = [];

const server = http.createServer(requestHandler);
server.listen(server_port, function(){
  console.log('Now listening on port 3000');
});

function requestHandler(request, response){
  response.setHeader('Access-Control-Allow-Origin', '*');

  if(request.method === 'GET'){
    if(request.url === '/getUsersOnline'){
      response.setHeader('Content-Type', 'Application/JSON;');
      response.end(JSON.stringify(usersOnline));
    }else if(request.url === '/getMessages'){
      response.setHeader('Content-Type', 'Application/JSON;');
      response.end(JSON.stringify(messages));
  }
  }else if(request.method === 'POST'){
    if(request.url === '/postMessage'){
        request.on('data', (data) => {
          messages.push(JSON.parse(data));
        });
      }else if(request.url === '/postUser'){
        request.on('data', (data) => {
          usersOnline.push(JSON.parse(data));
          console.log(usersOnline);
        });
      }else if(request.url === '/deleteUser'){
        request.on('data', (data) => {
          let index = usersOnline.indexOf(JSON.parse(data));
          if(index === -1){}else{
            usersOnline.splice(index, 1);
            console.log(usersOnline);
          }
        });
      }
      response.end();

  }
}
