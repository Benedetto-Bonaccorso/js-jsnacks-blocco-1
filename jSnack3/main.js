let h1 = document.querySelector("#heading")

let sum;
let numbersToInput = 10
let numbersSelected = 0
let userNumber = 0

/*

//usando for

for(let i = 0; i<numbersToInput; i++){
    userNumber += Number(prompt("Insert a number (you will need to imput 10 numbers)"))
    console.log(userNumber)
}
*/


//usando while

while(numbersSelected < 10){
    userNumber += Number(prompt("Insert a number (you will need to imput 10 numbers)"))
    numbersSelected++
}



if(isNaN(userNumber)){
    alert("One or more of the numbest selected are invalid, please reload the page and retry")
}
h1.innerHTML = userNumber
console.log(userNumber)