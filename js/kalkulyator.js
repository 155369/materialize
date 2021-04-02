var operationButton = document.getElementsByClassName("operation-button");
var input1 = document.getElementById("inputNumber1");
var input2 = document.getElementById("inputNumber2");
var clin_kalk = document.getElementById("kalk_result_clean");
var kalkOperationResult = document.getElementById("kalk_operation_result");

function makeOperation(makeOperation) {
    var number1 =Number(input1.value);
    var number2 =Number(input2.value);

    if (makeOperation === "+") {
        var sum = number1 + number2;
    }
    else if (makeOperation === "-") {
        var sum = number1 - number2;
    }
    else if (makeOperation === "*") {
        var sum = number1 * number2;
    }
    else if (makeOperation === "/") {
        var sum = number1 / number2;
    }
    else {
        alert("makeOperation is not difaind")
    }
    kalkOperationResult.innerHTML = sum;
}

for (let i = 0; i < operationButton.length; i++) {
    operationButton[i].addEventListener("click",onButtonClick);
}

function onButtonClick(eventObject) {
  var operation = eventObject.target.innerText;
  makeOperation(operation);
}

function cleanKalkulyatorInputsValues(){
    input1.value ="";
    input2.value ="";
    kalkOperationResult.value = "";
}
clin_kalk.addEventListener("click",cleanKalkulyatorInputsValues);