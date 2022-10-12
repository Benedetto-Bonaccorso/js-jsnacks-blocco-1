let numero1 = Number(prompt("Inserisci un numero"));
let numero2 = Number(prompt("Inserisci un altro numero"));
let h1 = document.querySelector("#heading")

/*
if(numero1 > numero2){
    console.log(numero1)
    h1.innerHTML = numero1
} else {
    console.log(numero2)
    h1.innerHTML = numero2
}
*/

let numeri = [numero1, numero2]
let numeroMassimo = Math.max(...numeri)

console.log(numeroMassimo)
h1.innerHTML = numeroMassimo

//let numeroMaggiore = numeri.indexOf[maggiore]

//console.log(numeroMaggiore)