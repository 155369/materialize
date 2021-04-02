//inputs
var speed = document.getElementById("V");
var way = document.getElementById("S");
var speedResultString = document.getElementById("speed_result_string");  

//buttons
var speedResultButton = document.getElementById("speed_result_button");
var speedResultClean = document.getElementById("speed_result_clean");

function onResultButtonClick(){
    var speed_input = speed.value * 1000/3600;
    var way_input = way.value ;
    var resultOperation = Number(way_input)/speed_input;
    speedResultString.value = resultOperation;
}
function cleanSpidometrInputsValues(){
    speed.value = "";
    way.value ="";
    speedResultString.value ="";
}

speedResultButton.addEventListener("click",onResultButtonClick)
speedResultClean.addEventListener("click",cleanSpidometrInputsValues)