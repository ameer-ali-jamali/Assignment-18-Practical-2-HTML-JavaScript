// ** Q1: Sum of Maximum and Minimum Numbers **


var num1 = parseFloat(prompt("Enter the first number"));
var num2 = parseFloat(prompt("Enter the second number"));
var num3 = parseFloat(prompt("Enter the third number"));

var min = Math.min(num1, num2, num3);
var max = Math.max(num1, num2, num3);

var sum = min + max;
alert("Sum of the maximum and minimum numbers is: " + sum);


// ** Q2: Weather Forecast **


var temperature = parseFloat(prompt("Enter the temperature:"));

if (temperature < 20) {
     alert("Cold");
} else if (temperature >= 20 && temperature <= 30) {
     alert("Normal");
} else if (temperature > 30) {
     alert("Hot");
}


// ** Q3: Temperature Conversion **


var choice = parseInt(prompt("Press 1 to convert from Celsius to Fahrenheit, or Press 2 to convert from Fahrenheit to Celsius"));
var temperature;

if (choice === 1) {
     temperature = parseFloat(prompt("Enter temperature in Celsius:"));
     var fahrenheit = (temperature * 9 / 5) + 32;
     alert("Temperature in Fahrenheit: " + fahrenheit);
} else if (choice === 2) {
     temperature = parseFloat(prompt("Enter temperature in Fahrenheit:"));
     var celsius = (temperature - 32) * 5 / 9;
     alert("Temperature in Celsius: " + celsius);
}


// ** Q4: Calculator with Password **


var password = prompt("Enter Password");

if (password === "admin") {
     var num1 = parseFloat(prompt("Enter the first number"));
     var num2 = parseFloat(prompt("Enter the second number"));

     alert("Addition: " + (num1 + num2));
     alert("Subtraction: " + (num1 - num2));
     alert("Multiplication: " + (num1 * num2));
     alert("Division: " + (num1 / num2));
} else {
     alert("Wrong Password");
}


// ** Q5: Number Guess Game **


var secretNumber = 3;
var userGuess = parseInt(prompt("Guess the number between 1 and 10:"));

if (userGuess === secretNumber) {
     alert("You Won!");
} else {
     alert("You lost! Better luck next time");
}


// ** Q6: Calculator Program **


var operation = prompt("Please enter an operation: addition, subtraction, multiplication, or division");

var num1 = parseFloat(prompt("Enter the first number"));
var num2 = parseFloat(prompt("Enter the second number"));

switch (operation) {
     case "addition":
          alert("Result: " + (num1 + num2));
          break;
     case "subtraction":
          alert("Result: " + (num1 - num2));
          break;
     case "multiplication":
          alert("Result: " + (num1 * num2));
          break;
     case "division":
          if (num2 !== 0) {
               alert("Result: " + (num1 / num2));
          } else {
               alert("Division by zero is not allowed");
          }
          break;
     default:
          alert("Invalid operation");
}
