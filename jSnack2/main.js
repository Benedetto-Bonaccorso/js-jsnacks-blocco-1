let word1 = prompt("insert a word");
let word2 = prompt("insert another word");

let h1 = document.querySelector("#heading")

let longestWord;

if(word1.length > word2.length){
    console.log(word1,word2)
    longestWord = word1
    shortestWord = word2
} else if(word1.length > word2.length) {
    console.log(word2,word1)
    longestWord = word2
    shortestWord = word1
} else{
    h1.innerHTML = "The two words are of equal length"
}

h1.innerHTML = longestWord + " " + shortestWord
