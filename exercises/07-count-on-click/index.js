//This is a global variable
var counter = 0;

function message(count){
	document.getElementById('screen').innerHTML = "The counter value is "+count;
}

window.onload = function loadFunction()
{
	//here I set the screen to the initial value when the website is fully loaded.
	message(counter);
}

//called when the user clicks
window.increaseCounter = function increaseCounter(){
	//increase the global counter in one
	counter++;
	//update the screen with the new value
	message(counter);
}

window.decreaseCounter = function decreaseCounter(){
	counter--;
	message(counter);
}