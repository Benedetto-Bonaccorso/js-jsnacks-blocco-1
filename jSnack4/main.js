let h1 = document.querySelector("#heading");

let names = ["Marceline", "Finn", "Jake", "IceKing"]

let userName = prompt("Insert your name to check if you're allowed inside")

if(names.includes(userName)){
    alert("You're allowed")
} else{
    alert("you're denied")
}