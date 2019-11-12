function Main(){
var btn = document.querySelector(".btn");
var httpRequest = new XMLHttpRequest();
var url = "superheroes.php";
var result=document.querySelector('#result');


 
btn.onclick=function(){



$.ajax({type:"GET", url:"superheroes.php",data:$("#sf").serialize(),success: function(data){
	result.innerHTML=data;
}

})




	//alert("Event Listener");
}

	//alert("laoded ");
}


document.addEventListener("DOMContentLoaded",Main);
