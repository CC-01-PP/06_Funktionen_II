
/*** Rechner */
/*
0. a+b / a-b/ a*b / a/b  // ergebnis c 
1. Dateneingabe + -überprüfung :
2. Auswahl Rechenart : check!!
3. Fkt. Grundrechenarten : check!!
4. Ausgabe in Konsole : check!!
*/


// application / App
startApp();
function startApp() {
    output(calculator(getNumber("first"),getNumber("second"),getOp()));
}

function getNumber(figure) {
    let inputString = prompt("Please give your " + figure + " number:")
    let num = parseInt(inputString);
    return num;
}
function getOp() {
    let op = prompt("Are you a smooth operator?")
    return op;
}

//module: calculator | tests:
//Agreement : "+", "-", "*", ":"
// output(calculator(2,2,"+"));
// output(calculator(2,2,"-"));
// output(calculator(2,2,"*"));
// output(calculator(2,2,":"));
// output(calculator(2,0,"/"));
// output(calculator(2,2,"#"));

function calculator(a,b,op) {
    switch (op) {
        case "+": // addition 
            return add(a,b);
        case "-": // subtraction
            return subtract(a,b);
        case "*": // multiplication
            return multiply(a,b);  
        case "/": // division
        case ":": // division
            return divide(a,b);
        default: // Error...
            return "Sorry - something went wrong... Try again?";
    }
}


//module: division a / b | test:
// output(divide(2,3));
// output(divide(2,-3));
// output(divide(2,0));
// output(divide(0,2));
function divide(a,b) {

    // if (b != 0) {
    //     // true
    //     return a / b;
    // } else {
    //     // false
    //     return "ERROR";
    // }

    if (b == 0) {
        // false
            return "Division by 0 not possible!"
        }
        // true
        return a / b;
    }

//module: multiply a * b | test:
// output(multiply(2,3));
// output(multiply(2,-3));
// output(multiply(2,0));
function multiply(a,b) {
    return a * b;
}

//module: subtraction a - b | test:
// output(subtract(2,3));
// output(subtract(6,3));
// output(subtract(2,2));
function subtract(a,b) {
    return a - b;
}

//module: addition a + b | test:
// output(add(2,3));
// output(add(2,-3));
// output(add(2,0));
function add(a,b) {
    return a + b;
}


//module: console output | test
// output("hello");
// output(2);
function output(outputData) {
    // console.log(typeof outputData)
    if (typeof outputData == "number") {
        console.log("The result is: " + outputData);
    } else {
        console.log("ERROR!!! " + outputData)
    }

}