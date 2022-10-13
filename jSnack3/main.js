let h1 = document.querySelector("#heading")

let sum;
let numbersToInput = 10
let numbersSelected = 0
let userNumber = 0

/*
for(let i = 0; i<numbersToInput; i++){
    userNumber += Number(prompt("Insert a number (you will need to imput 10 numbers)"))
    console.log(userNumber)
}

*/

while(numbersSelected < 10){

    userNumber += Number(prompt("Insert a number (you will need to imput 10 numbers)"))

    numbersSelected++
}

h1.innerHTML = userNumber
console.log(userNumber)