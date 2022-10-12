let word1 = prompt("insert a word");
let word2 = prompt("insert another word");

let h1 = document.querySelector("#heading")

let longestWord;

if(word1.length > word2.length){
    console.log(word1)
    longestWord = word1
} else {
    console.log(word2)
    longestWord = word2
}

h1.innerHTML = longestWord