window.onbeforeunload = function(e){
  const xml =  new XMLHttpRequest();
  xml.open('POST', 'http://localhost:3000/deleteUser');
  xml.send(JSON.stringify(userName));
}
