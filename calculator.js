let validResults = [];
// Function to perform the calculation based on the operator
document.write("<table>");
document.write("<tr><th>Number 1</th><th>Operator</th><th>Number 2</th><th>Result</th></tr>");


while (true) {
    // Prompt the user for the first number
    let xInput = prompt("Enter the first number (Cancel to stop):");
    if (xInput === null) {break;} //Breaks the loop if the user cancels the prompt

    let yInput = prompt("Enter the second number (Cancel to stop):");
    if (yInput === null) {break;}

    let operator = prompt("Enter the operator (+, -, *, /, %):");
    if (operator === null) {break;}


    let x = Number(xInput);
    let y = Number(yInput);
    let result;

    if (isNaN(x) || isNaN(y)) {
        result = "wrong input number";
    } else if (
        operator !== "+" &&
        operator !== "-" &&
        operator !== "*" &&
        operator !== "/" &&
        operator !== "%"
    ) {
        result = "computation error";
    } else {

        if (operator === "+") {
            result = x + y;
        } else if (operator === "-") {
            result = x - y;
        } else if (operator === "*") {
            result = x * y;
        } else if (operator === "/") {
            result = (x / y);
        } else if (operator === "%") {
            result = x % y;
        }

        validResults.push(result);
    }

    document.write("<tr><td>" + xInput + "</td><td>" + operator + "</td><td>" + yInput + "</td><td>" + result + "</td></tr>");
}

document.write("</table>");

if (validResults.length > 0) {


    let min = validResults[0];
    let max = validResults[0];
    let total = 0;

    for (let i = 0; i < validResults.length; i++) {

        let value = validResults[i];
        total += value;

        if (value < min) {
            min = value;
        }

        if (value > max) {
        max = value;
        }
    }

    let average = total / validResults.length;

    document.write("<table>");
    document.write("<tr><th>Minimum</th><th>Maximum</th><th>Average</th><th>Total</th></tr>");
    document.write("<tr><td>" + min + "</td><td>" + max + "</td><td>" + average + "</td><td>" + total + "</td></tr>");
    document.write("</table>");

}
