const input = document.getElementById("word-length");
const container = document.getElementById("container");

const generateWord = (n) => {
    let text = "";
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for(let i=0; i<n; ++i)
    {
        text += letters[Math.floor(Math.random()*25)];
    }

    return text;
};

const generatePara = () => {
    const numOfWords = Number(input.value);

    let data = "";

    for(let i=0; i<numOfWords; ++i){
        let randomNumber = Math.floor(Math.random()*15);
        data += generateWord(randomNumber);
        data += " ";
    }
    const para = document.createElement("p");
    para.innerText = data;

    para.setAttribute("class", "para");

    container.appendChild(para);
};

document.getElementById("generate").onclick = generatePara;