function myAuto(element, value){
	if(document.getElementById(element) && value != ""){
		document.getElementById(element) = value;
	}
}
myAuto("name","Hello")