let h1 = document.querySelector("#heading");

let names = ["Marceline", "Finn", "Jake", "IceKing"]

let userName = prompt("Insert your name to check if you're allowed inside")

let allowed = false
/*
if(names.includes(userName)){
    alert("You're allowed")
} else{
    alert("you're denied")
}
*/
//Usando un ciclo

/*
for(let i = 0; i < names.length; i++){

    if(userName == names[i]){
        allowed = true
    }

    if(allowed == true){
        alert("You're allowed")
        h1.innerHTML = "You're allowed"
        break
    } else if (allowed == false && i == names.length-1){
        alert("You're not allowed")
        h1.innerHTML = "You're not allowed"
    }
}
*/

/*
let i = 0
while(i<names.length){

    if(userName == names[i]){
        allowed = true
    }

    if(allowed == true){
        alert("You're allowed")
        h1.innerHTML = "You're allowed"
        break
    } else if (allowed == false && i == names.length-1){
        alert("You're not allowed")
        h1.innerHTML = "You're not allowed"
    }

    i++
}
*/

let i = 0

do{
    if(userName == names[i]){
    allowed = true
    }

    if(allowed == true){
        alert("You're allowed")
        h1.innerHTML = "You're allowed"
        break
    } else if (allowed == false && i == names.length-1){
        alert("You're not allowed")
        h1.innerHTML = "You're not allowed"
    }

    i++
} while(i<names.length)