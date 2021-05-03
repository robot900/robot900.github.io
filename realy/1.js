function goin(){
	var userid = document.getElementById("userid").value;
	var userpass = document.getElementById("userpass").value;
	if (userid == "Vasya"){
		if (userpass == "123456789"){
			window.location.href="real.html";
		}
	}
}
