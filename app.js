function Main(){
var btn = document.querySelector("button");
var httpRequest = new XMLHttpRequest();
var url = "superheroes.php";

function doSomething() {
	if (httpRequest.readyState === XMLHttpRequest.DONE) {
		 if (httpRequest.status === 200) {
		 var response = httpRequest.responseText;
		 alert(response);
		 } else {
		 alert('There was a problem with the request.');
		 alert("Error "+httpRequest.status);
		 }
	}
}

btn.onclick=function(){

	

httpRequest.onreadystatechange = doSomething;
httpRequest.open('GET', url);
httpRequest.send();


	alert("Event Listener");
}





	alert("laoded ");







}


document.addEventListener("DOMContentLoaded",Main);
