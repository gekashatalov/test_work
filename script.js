document.addEventListener('DOMContentLoaded', function(){
	callCheckBrackets();
	callBackspace();
});

function checkBrackets (str) {
	if(str.length == 0){
		return false;
	}
	let stack = [];
	for(let i = 0; i < str.length; i++){
		let x = str[i];
		if(x == "(" || x == "{" || x == "["){
			stack.push(x);
			continue;
		}
		if(stack.length == 0){
			return false;   
		}
		let check;
		switch (x){
		case(")"):
			check = stack.pop();
			if(check == "{" || check == "["){
				return false;
			}
			break;
		case ("}"):
			check = stack.pop();
			if(check == "(" || check == "["){
				return false;
			}
			break;
		case ("]"):
			check = stack.pop();
			if(check == "{" || check == "("){
				return false;
			}
			break;	
		}
	}
	return (stack.length == 0);
}

function backspace (str) {
	let string = str;
	while(string.match(/\w\#/)){
		string=string.replace(/\w\#/g,"");
	}
	while(string.match(/\#/)){
		string=string.replace(/\#/g,"");
	}
	return string;
}

function callCheckBrackets(){
	let output = document.querySelector('.task.first .result');
	let btn = document.querySelector('.task.first a');
	btn.addEventListener('click', function(e){
		e.preventDefault();
		let inputStr = document.querySelector('.task.first input').value;
		if(checkBrackets(inputStr)){
			output.innerHTML = "TRUE";
		} else {
			output.innerHTML = "FALSE";
		}
	});
}

function callBackspace(){
	let output = document.querySelector('.task.second .result');
	let btn = document.querySelector('.task.second a');
	btn.addEventListener('click', function(e){
		e.preventDefault();
		let inputStr = document.querySelector('.task.second input').value;
		output.innerHTML = backspace(inputStr);
	});
}