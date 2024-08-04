var server = "http://chat-kdfc.onrender.com/"
var tokenText = document.getElementById("token");
console.log("Dehwlhds")
async function request(path, data){
	return new Promise((res, rej)=>{
		var xml = new XMLHttpRequest();
		xml.onreadystatechange = function(){
			if (xml.readyState == 4){
				res([xml.body, xml.status]);
			}
		}
		xml.open("POST", server+path, true);
		console.log(data);
		xml.setRequestHeader('Content-Type', 'application/json');
		xml.send(JSON.stringify(data));
	})
}

function logirn(){
	console.log(tokenText.value);
	request("login", {"token":tokenText.value})
	.then(res=>{
		if (res[1] == 500 && res[0] == "Invalid token"){
			console.log("Invalid token");
		}
		else{
			console.log("dkhbskjc");
		}
	});
}
