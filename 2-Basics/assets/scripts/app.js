const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserNumberInput() {
	return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
	const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
	outputResult(currentResult, calcDescription);
	userInput.value = '';
	console.log(logEntries);
}

function writeToLog(
	operationIdentifier,
	prevResult,
	operationNumber,
	newResult
) {
	const logEntry = {
		operation : operationIdentifier,
		prevResult: prevResult,
		number: operationNumber,
		result: newResult
	};	
	logEntries.push(logEntry);
}

function add() {
	const enteredNumber = getUserNumberInput();
	const initialResult = currentResult;
	currentResult += enteredNumber;
	writeToLog('ADD', initialResult, enteredNumber, currentResult);
	createAndWriteOutput('+', initialResult, enteredNumber);
}

function subtract() {
	const enteredNumber = getUserNumberInput();
	const initialResult = currentResult;
	currentResult -= enteredNumber;
	writeToLog('SUBTRACT', initialResult, enteredNumber, currentResult);
  	createAndWriteOutput('-', initialResult, enteredNumber);
}

function divide() {
	const enteredNumber = getUserNumberInput();
	const initialResult = currentResult;
	currentResult /= enteredNumber;
	writeToLog('DIVIDE', initialResult, enteredNumber, currentResult);
  	createAndWriteOutput('/', initialResult, enteredNumber);
}

function multiply(name) {
	const enteredNumber = getUserNumberInput();
	const initialResult = currentResult;
	currentResult *= enteredNumber;
	writeToLog('MULTIPLY', initialResult, enteredNumber, currentResult);
  	createAndWriteOutput('*', initialResult, enteredNumber);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);