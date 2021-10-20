const defaultResult = 0;
let currentResult = defaultResult;

function add() {
  	currentResult = currentResult + userInput.value;
  	outputResult(currentResult, '');
}

function minus() {
	alert('This is minus function')
}

function multiply(name) {
	alert('this is the text on parameter ' + name)
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', minus)

minus();
multiply('Alex');
