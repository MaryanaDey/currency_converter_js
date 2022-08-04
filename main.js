var input = document.getElementById('input');
var result = document.getElementById('result');

var inputType = document.getElementById('inputType');
var resultType = document.getElementById('resultType');
var inputTypeValue, resultTypeValue;



input.addEventListener("keyup", myResult);
inputType.addEventListener("change", myResult);
resultType.addEventListener("change", myResult);

inputTypeValue = inputType.value;
resultTypeValue = resultType.value;


function myResult() {
    inputTypeValue = inputType.value;
    resultTypeValue = resultType.value;

    // meter to kilimetr
    if (inputTypeValue === "meter" && resultTypeValue === "kilometer") {
        result.value = Number(input.value) * 0.001;

        // meter to cantimetr
    } else if (inputTypeValue === "meter" && resultTypeValue === "centimeter") {
        result.value = Number(input.value) * 100;
        // meter to cmeter
    } else if (inputTypeValue === "meter" && resultTypeValue === "meter") {
        result.value = input.value
    }


    // kilometer to metr
    if (inputTypeValue === "kilometer" && resultTypeValue === "meter") {
        result.value = Number(input.value) * 1000;

        // kilometer to cantimetr
    } else if (inputTypeValue === "kilometer" && resultTypeValue === "centimeter") {
        result.value = Number(input.value) * 1000000;
        // kilometer to kilometer
    } else if (inputTypeValue === "kilometer" && resultTypeValue === "kilometer") {
        result.value = input.value
    }

    // centimeter to kilometer
    if (inputTypeValue === "centimeter" && resultTypeValue === "kilometer") {
        result.value = Number(input.value) * 0.000001;

        // cantimetr to kilometer
    } else if (inputTypeValue === "centimeter" && resultTypeValue === "meter") {
        result.value = Number(input.value) * 0.01;
        // centimeter to centimeter
    } else if (inputTypeValue === "centimeter" && resultTypeValue === "centimeter") {
        result.value = input.value
    }



}