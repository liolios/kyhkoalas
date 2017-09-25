const url = 'http://localhost:3000';

let userName = prompt("Whats your name?");


document.getElementById('submitMessage').onclick = function(){
	let	tempMessage = document.getElementById("message").value;
	let d = new Date();
	let time = d.getHours() + ":" + d.getMinutes();	
	alert(tempMessage);
	let newMessage = {
		userName: userName, 
		message: tempMessage,
		time: time
	};
	const request = new XMLHttpRequest();
	request.open('POST', url);
	request.send(JSON.stringify(newMessage));
}
if(userName){
	setInterval(function(){getMessages();}, 2000);
}
function getMessages(){
	const request = new XMLHttpRequest();
	request.onreadystatechange = function(req, response){
		if(request.readyState === XMLHttpRequest.DONE){
			tempMessageArray = JSON.parse(request.response);
		}
	}
	request.open('GET', url);
	request.send();
}