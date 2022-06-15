// Basic functions

function add(a, b) {
    return a+b
}
// console.log("add test: 31+17="+ add(17,31));

function substract(a, b) {
    return a-b
}
// console.log("substract test: 31-37="+ substract(31,37));

function multiply(a, b) {
    return a*b
}
// console.log("multiply test: 1*(-6)="+ multiply(1,-6));

function divide(a, b) {
    if (b==0) {
        alert("You cannot divide by 0")
    } else {return a/b}
}
// console.log("divide test: 6/2="+ divide(6,2));

function operate(operator, a, b) {
    if (operator == "add") {
        return add(parseFloat(a),parseFloat(b));
    } else if (operator == "substract") {
        return substract(parseFloat(a),parseFloat(b));
    } else if (operator == "multiply") {
        return multiply(parseFloat(a),parseFloat(b));
    } else if (operator == "divide") {
        return divide(parseFloat(a),parseFloat(b));
    } else console.log("Error");
}
// console.log("operator test: add,6,2="+ operate(add,6,2));

// ---------

// Populate display

let a = null;
let b = null;
let operator = null;
let point = false;

let display = document.getElementById("display");

const btnDigits = document.querySelectorAll('div.digit');
btnDigits.forEach(digit => {
    digit.addEventListener('click', () => {
        console.log("Click on " + digit.textContent);
        if (digit.textContent == "0" && display.textContent == "0") {
            console.log("Only one zero"); 
        } else {
            if (operator != null && a != null && b == null) {
                display.textContent = "";
                point = false;
                b = "writing";
            }

            // console.log("   a : $" + a + "$");
            // console.log("   b : $" + b + "$");
            // console.log("   operator : $" + operator + "$");

            display.textContent += digit.textContent;
        }
    })

});

// ---------

// Calculator
const btnOperations = document.querySelectorAll('div.operator');
btnOperations.forEach(operation => {
    operation.addEventListener('click', () => {
        console.log("Click on " + operation.id);
        if (a == null) {
            a = display.textContent;
        }
        else {
            a = equals(operator, a);
        }
        operator = operation.id;
    })
});

const btnEquals = document.querySelector('div#equals');
btnEquals.addEventListener('click', () => {
    console.log("Click on equals");
    if (a != null && b != null && operator != null) {
        equals(operator, a);
    }
})

function equals(operator, a) {
    b = display.textContent;
    let res = operate(operator, a, b);
    a = res;
    b = null;
    operator = null;

    let resRounded = res.toFixed(7);
    
    display.textContent = resRounded;
    return res;
}

const btnClear = document.querySelector('div#clear');
btnClear.addEventListener('click', () => {
    console.log("Click on clear");
    a = null;
    b = null;
    operator = null;
    display.textContent = "";
    point=false;
})

const btnDelete = document.querySelector('div#delete');
btnDelete.addEventListener('click', () => {
    console.log("Click on delete");
    let dis = display.textContent.split("");
    dis.pop();
    display.textContent= dis.join("");
})

const btnNegative = document.querySelector('div#negative');
btnNegative.addEventListener('click', () => {
    console.log("Click on +/-");
    if (display.textContent != "" && display.textContent > 0) {
        display.textContent = "-" + display.textContent
    }
    else if (display.textContent != "" && display.textContent < 0) {
        display.textContent = -parseFloat(display.textContent);
    }
})

const btnPoint = document.querySelector('div#point');
btnPoint.addEventListener('click', () => {
    if (Number.isInteger(display.textContent)) {
        point = true;
        alert("A decimal number contains only one point");
    } else if (!point) {
        point = true;
        display.textContent += btnPoint.textContent;
    } else {
        alert("A decimal number contains only one point");
    }
})




// ---------

