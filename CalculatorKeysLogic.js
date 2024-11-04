let inputState = '';
let length = 0;
let breadth = 0;
let radius = 0;
let a1 = 0;
let b1 = 0
let a2 = 0;
let b2 = 0
let operationType = '';  // To track which operation user wants (area, perimeter, diagonal)

function appendValue(value) {
    let display = document.getElementById("display");
    display.value += value;
}

function appendPi() {
    let display = document.getElementById("display");
    display.value += Math.PI.toFixed(6);
}

function appendE() {
    let display = document.getElementById("display");
    display.value += Math.E.toFixed(6);
}

function appendC() {
    let display = document.getElementById("display");
    display.value += '299,792,458';
}

function calculateResult() {
    let display = document.getElementById("display");
    try {
        const sanitizedInput = display.value.replace(/,/g, '');
        const expression = sanitizedInput.replace(/\^/g, '**');
        let result = eval(expression);
        display.value = result;
    } catch (error) {
        display.value = "Error";
    }
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function appendSqrt() {
    let display = document.getElementById("display");
    try {
        display.value = Math.sqrt(eval(display.value));
    } catch (error) {
        display.value = "Error";
    }
}

function appendDecimal() {
let display = document.getElementById("display");
const value = display.value;

    // Allow decimal only if it's not already part of the current number.
    if (value === "" || /[+\-*/]$/.test(value)) {
        display.value += "0.";  // Start with 0 if operator or display is empty.
    } else if (!value.split(/[+\-*/]/).pop().includes(".")) {
    display.value += ".";
    }
}
       
function setOperationTypeCircle(type) {
    operationType = type;  // Set the type of operation (area, perimeter, diagonal)
    document.getElementById("display").value = "Enter Radius:";  //  Ask for the first input
    inputState = 'radius';  // Set state to get radius
}

function setOperationTypeRectangle(type) {
    operationType = type;  // Set the type of operation (area, perimeter, diagonal)
    document.getElementById("display").value = "Enter Length:";  // Ask for the first input
    inputState = 'length';  // Set state to get length
}

function setOperationTypeSquare(type) {
    operationType = type;  // Set the type of operation (area, perimeter, diagonal)
    document.getElementById("display").value = "Enter Side, a:";  // Ask for the first input
    inputState = 'a';  // Set state to get length
}

function setOperationTypeIsoTri(type) {
    operationType = type; 
    document.getElementById("display").value = "Enter side, a:";
    inputState = 'a1';
}

function setOperationTypeEquiTri(type) {
    operationType = type; 
    document.getElementById("display").value = "Enter side, a:";
    inputState = 'a2';
}

function handleEnterPress() {
    let display = document.getElementById("display");
    let value = parseFloat(display.value.split(":")[1]);  // Extract the input value

    if (inputState === 'length') {
        if (isNaN(value)) {
            display.value = "Invalid Length! Try Again:";  // Handle invalid input
        } else {
            length = value;  // Store the length
            display.value = "Enter Breadth:";  // Ask for breadth
            inputState = 'breadth';  // Update input state
        }
    } else if (inputState === 'breadth') {
        if (isNaN(value)) {
            display.value = "Invalid Breadth! Try Again:";  // Handle invalid input
        } else {
            breadth = value;  // Store the breadth
        }
        // Perform the selected operation and display the result
        if (operationType === 'area') {
            let area = length * breadth;
            display.value = `Area: ${area}`;
        } else if (operationType === 'perimeter') {
            let perimeter = 2 * (length + breadth);
            display.value = `Perimeter: ${perimeter}`;
        } else if (operationType === 'diagonal') {
            let diagonal = Math.sqrt(length * length + breadth * breadth);
            display.value = `Diagonal: ${diagonal}`;
        }
    }else if (inputState === 'radius') {
        if (isNaN(value)) {
            display.value = "Invalid radius! Try Again:";  // Handle invalid input
        } else {
            radius = value;  // Store the radius
        }
        // Perform the selected operation and display the result
        if (operationType === 'area') {
            let area = 3.14159 * radius * radius;
            display.value = `Area: ${area}`;
        }else if (operationType === 'circumference') {
            let circumference = 2 * 3.14159 * radius;
            display.value = `Circumference: ${circumference}`;
        }     
    } else if (inputState === 'a') {
        if (isNaN(value)) {
            display.value = "Invalid side(a)! Try Again:";  // Handle invalid input
        } else {
            a = value;  // Store the length
        }
        // Perform the selected operation and display the result
        if (operationType === 'area') {
            let area = a * a;
            display.value = `Area: ${area}`;
        } else if (operationType === 'perimeter') {
            let perimeter = 4 * a;
            display.value = `Perimeter: ${perimeter}`;
        } else if (operationType === 'diagonal') {
            let diagonal = Math.sqrt(2*a);
            display.value = `Diagonal: ${diagonal}`;
        }
    }else if (inputState === 'a1') {
        if (isNaN(value)) {
            display.value = "Invalid side, a! Try Again:";  // Handle invalid input
        } else {
            a1 = value;  // Store the length
            display.value = "Enter Side, b:";  // Ask for breadth
            inputState = 'b1';  // Update input state
        }
    }  else if (inputState === 'b1') {
        if (isNaN(value)) {
            display.value = "Invalid side, b! Try Again:";
        } else {
            b1 = value;
        }
        // Perform calculation based on operation type.
        let c = Math.sqrt(4 * (a1 * a1) - b1 * b1);
        if (operationType === 'area') {
            let area = (b1 * c) / 4;
            display.value = `Area: ${area}`;
        } else if (operationType === 'perimeter') {
            let perimeter = 2 * a1 + b1;
            display.value = `Perimeter: ${perimeter}`;
        } else if (operationType === 'height') {
            let height = c / 2;
            display.value = `Height: ${height}`;
        }
    } else if (inputState === 'a2') {
        if (isNaN(value)) {
            display.value = "Invalid side, a! Try Again:";  // Handle invalid input
        } else {
            a2 = value;  // Store the length
            display.value = "Enter Side, b:";  // Ask for breadth
            inputState = 'b2';  // Update input state
        }
    } else if (inputState === 'b2') {
        if (isNaN(value)) {
            display.value = "Invalid side, b! Try Again:";  // Handle invalid input
        } else {
            b2 = value;  // Store the breadth
        }
        let d = Math.sqrt(3)/2 * a;
        if (operationType == 'area') {
            let area = 1/2 * a * d;
            display.value = `Area: ${area}`;
        } else if (operationType  == 'perimeter') {
            let perimeter = 3 * a2;
        } else if (operationtype == 'height') {
            let height = d;
        }
        // Reset state and variables
        inputState = '';
        radius = 0;
        length = 0;
        breadth = 0;
        a1 = 0;
        b1 = 0
        a2 = 0;
        b2 = 0
    }
}


function toggleSection(sectionId) {
    let section = document.getElementById(sectionId);
    section.style.display = section.style.display === 'none' ? 'block' : 'none';
}

function showOnlySection(sectionId) {
    let sections = document.querySelectorAll('.circle-buttons, .square-buttons, .rectangle-buttons, .triangle-buttons, .equitri-buttons, .isotri-buttons');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}

const button = document.getElementById("hoverButton");
const hoverText = document.getElementById("hoverText");

// Show text when mouse enters the button
button.addEventListener("mouseover", function () {
    hoverText.style.display = "block";
});

// Hide text when mouse leaves the button
button.addEventListener("mouseout", function () {
    hoverText.style.display = "none";
});
