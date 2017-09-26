window.onbeforeunload = function(e){
  const xml =  new XMLHttpRequest();
  xml.open('GET', 'http://localhost:3000/closing');
  xml.send();
}

/*
function sendUserName(namn){
  console.log('1');
  const xml =  new XMLHttpRequest();
  xml.open('POST', 'http://localhost:3000/postUser');
  xml.send(namn);
}
*/
