const input = document.getElementById("word-length");
let numOfWords;
const getData = () => {
    numOfWords = Number(input.value);
    console.log(numOfWords);
};

document.getElementById("generate").onclick = getData;