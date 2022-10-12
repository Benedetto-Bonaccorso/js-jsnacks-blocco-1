let numero1 = prompt("Inserisci un numero");
let numero2 = prompt("Inserisci un altro numero");

let h1 = document.querySelector("#heading")

console.log(h1)

if(numero1 > numero2){
    console.log(numero1)
    h1.innerHTML = numero1
} else {
    console.log(numero2)
    h1.innerHTML = numero2
}
