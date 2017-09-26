const url = 'http://172.20.10.5:3000';
    
let userName = prompt("Whats your name?");
while(userName == null){
	userName = prompt("Please enter your name to use the chat.");
}

document.getElementById('submitMessage').onclick = function(){
	let	tempMessage = document.getElementById("message").value;
	let d = new Date();
	let time = d.getHours() + ":" + d.getMinutes();
	let newMessage = {
		userName: userName,
		message: tempMessage,
		time: time
	};
	document.getElementById("message").value = "";
	const request = new XMLHttpRequest();
	request.open('POST', url);
	request.send(JSON.stringify(newMessage));
	
}
if(userName){
	setInterval(function(){getMessages();}, 1000);
}
function getMessages(){
	const request = new XMLHttpRequest();
	request.onreadystatechange = function(req, response){
		if(request.readyState === XMLHttpRequest.DONE){
			let tempMessagesArray = JSON.parse(request.response);
			let tempMessagesLength = tempMessagesArray.length;
			document.getElementById('relevant').innerHTML = "";
			for(let x = 0; x < tempMessagesLength; x++){
				document.getElementById('relevant').innerHTML += '<div class="Message"><p class ="time">' + tempMessagesArray[x].time + '</p><h3>'+ tempMessagesArray[x].userName + '</h3><p>' + tempMessagesArray[x].message + '</p></div>';
			}
		}
	}
	request.open('GET', url);
	request.send();
}
