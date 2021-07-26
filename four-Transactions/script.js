let out, trueVal = 0, falseVal = 0;

// DOM referenes
const leftBox = document.querySelector(".left");
const container = document.querySelector(".container");
const trueBox = document.querySelector(".true");
const falseBox = document.querySelector(".false");
const input = document.querySelector(".input");


random();

function random() {

    let num1, num2, randomOperation, operation;


    while (1) {

        randomOperation = Math.floor(Math.random() * 4 + 1);
        num1 = Math.floor(Math.random() * 100 + 1);
        num2 = Math.floor(Math.random() * 50 + 1);

        if (randomOperation == 1) {
            out = num1 + num2;
            operation = "+";
        }
        else if (randomOperation == 2) {
            out = num1 - num2;
            operation = "-";
        }
        else if (randomOperation == 3) {
            out = num1 * num2;
            operation = "*";
        }
        else if (randomOperation == 4) {
            out = num1 / num2;
            operation = "/";
        }

        if (out == parseInt(out, 10) && out > 0) break;
    }

    leftBox.innerHTML = `${num1} ${operation} ${num2} =`;

}



function checkResult() {


    if (out == input.value) {

        trueVal++;
        trueBox.innerHTML = `${trueVal}`;
        container.style.boxShadow = "1px 1px 20px 10px green";

    }
    else if (input.value == parseInt(input.value, 10)) {

        falseVal++;
        falseBox.innerHTML = `${falseVal}`;
        container.style.boxShadow = "1px 1px 20px 10px red";

    }


    clearValue(input);
    random();
}

function clearValue(input) {
    input.value = "";
}



