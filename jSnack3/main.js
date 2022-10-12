let h1 = document.querySelector("#heading")

let number1 = Number(prompt("Insert a number (you will need to imput 10 numbers)"));
let number2 = Number(prompt("Insert a number (you will need to imput 10 numbers)"));
let number3 = Number(prompt("Insert a number (you will need to imput 10 numbers)"));
let number4 = Number(prompt("Insert a number (you will need to imput 10 numbers)"));
let number5 = Number(prompt("Insert a number (you will need to imput 10 numbers)"));
let number6 = Number(prompt("Insert a number (you will need to imput 10 numbers)"));
let number7 = Number(prompt("Insert a number (you will need to imput 10 numbers)"));
let number8 = Number(prompt("Insert a number (you will need to imput 10 numbers)"));
let number9 = Number(prompt("Insert a number (you will need to imput 10 numbers)"));
let number10 = Number(prompt("Insert a number (you will need to imput 10 numbers)"));

let finalNumber = number1 + number2 + number3 + number4 + number5 + number6 + number7 + number8 + number9 + number10

let errorMessage = "one or more of the number inserted isn't valid"

if(isNaN(finalNumber)){
    alert(errorMessage)
    h1.innerHTML = errorMessage
    console.log(errorMessage)
} else {
    console.log(finalNumber)
    h1.innerHTML = finalNumber
}
