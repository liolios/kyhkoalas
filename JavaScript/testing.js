window.onbeforeunload = function(e){
  const xml =  new XMLHttpRequest();
  xml.open('POST',  url + '/deleteUser');
  xml.send(JSON.stringify(userName));
}
