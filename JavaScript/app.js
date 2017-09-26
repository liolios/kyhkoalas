const url = 'http://10.7.2.30:3000';
//let users = getUsers();
let isValid = false;
let userName;
let users = [];

while(!isValid){
	 userName = prompt("Whats your name?");

	if(userName == '')
	{
		userName = prompt("Please enter your name to use the chat.");
	}
	else if(!users.indexOf(userName))
	{
			alert("Username is taken, choose another one!");
	}
	else
	{
		isValid = true;
		sendUserName(userName);
		}
}



document.getElementById('submitMessage').onclick = function(){
	let	tempMessage = document.getElementById("message").value;
	document.getElementById("message").value = "";
	let d = new Date();
	let time = d.getHours() + ":" + d.getMinutes();
	let newMessage = {
		userName: userName,
		message: tempMessage,
		time: time
	};
	const request = new XMLHttpRequest();
	request.open('POST', url + '/postMessage');
	request.send(JSON.stringify(newMessage));

}

if(userName){
	setInterval(function(){getMessages();}, 1000);
	setInterval(function(){getUsers();}, 1500);
}

function sendUserName(userName)
{
	const request = new XMLHttpRequest();
	request.open('POST', url + '/postUser');
	request.send(JSON.stringify(userName));
}
function getUsers()
{
	const request = new XMLHttpRequest();
	request.onreadystatechange = function(req, response)
	{
		if(request.readyState === XMLHttpRequest.DONE)
		{
			users = JSON.parse(request.response);
		}
	}
	request.open("GET", url + "/getUsersOnline");
	request.send();
	printOnlineUsers();
}

function printOnlineUsers(){
	let onlineLength = users.length;
	document.getElementById('online').innerHTML = '';
	for(let x = 0; x < onlineLength; x++){
		document.getElementById('online').innerHTML += '<p>'+users[x]+'</p>';
	}
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
	request.open('GET', url + '/getMessages');
	request.send();
}
