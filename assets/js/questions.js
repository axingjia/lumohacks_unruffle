window.addEventListener('load', init);
var allButtonDisplay;


function init() {
	allButtonDisplay = document.querySelectorAll('#questionlist button');
	installEventListener();
}

function installEventListener(){
	allButtonDisplay.forEach(function(buttonDisplay){
		buttonDisplay.addEventListener('click', function(){
			window.location.href = 'index2.html';
		});
	})
	
}