const url = 'http://localhost:3000';

let userName = prompt("Whats your name?");


document.getElementById('submitMessage').onclick = function(){
	let	tempMessage = document.getElementById("message").value;
	alert(newMessage);
	let newMessage = {userName: userName, message: tempMessage
	};
	const request = new XMLHttpRequest();
	request.open('POST', url);
	request.send(newMessage);
}
